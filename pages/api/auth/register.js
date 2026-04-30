import bcrypt from "bcrypt";
import { getPool } from "../../../lib/db";

// Username rules matching the game client
const USERNAME_REGEX = /^[a-zA-Z0-9]{4,13}$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { fullName, username, password, confirmPassword } = req.body;

  // ── Validation ────────────────────────────────────────────────────────────────
  if (!fullName || !username || !password || !confirmPassword) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const trimmedName = fullName.trim();
  if (trimmedName.length < 2 || trimmedName.length > 20) {
    return res.status(400).json({ error: "Full name must be 2–20 characters." });
  }

  if (!USERNAME_REGEX.test(username)) {
    return res
      .status(400)
      .json({ error: "Username must be 4–13 characters, letters and numbers only." });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters." });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match." });
  }

  try {
    const pool = getPool();

    // ── Check if username already taken ──────────────────────────────────────────
    const [existing] = await pool.execute(
      "SELECT id FROM accounts WHERE name = ? LIMIT 1",
      [username]
    );
    if (existing.length > 0) {
      return res.status(409).json({ error: "Username is already taken." });
    }

    // ── Hash password with BCrypt (cost 12 — matches the game server) ─────────────
    const hashedPassword = await bcrypt.hash(password, 12);

    // ── Insert account ────────────────────────────────────────────────────────────
    // birthday & tempban default values match what the game server uses
    await pool.execute(
      `INSERT INTO accounts (name, password, nick, birthday, tempban, tos)
       VALUES (?, ?, ?, '2005-05-11', '2005-05-11 00:00:00', 1)`,
      [username, hashedPassword, trimmedName]
    );

    return res.status(201).json({ message: "Account created! You can now log in to the game." });
  } catch (err) {
    console.error("Register error:", err);
    return res.status(500).json({ error: "Server error. Please try again later." });
  }
}
