import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getPool } from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required." });
  }

  try {
    const pool = getPool();

    const [rows] = await pool.execute(
      "SELECT id, name, nick, password, banned FROM accounts WHERE name = ? LIMIT 1",
      [username]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: "Invalid username or password." });
    }

    const account = rows[0];

    if (account.banned === 1) {
      return res.status(403).json({ error: "This account has been banned." });
    }

    const valid = await bcrypt.compare(password, account.password);
    if (!valid) {
      return res.status(401).json({ error: "Invalid username or password." });
    }

    // Issue a short-lived JWT for the website session
    const token = jwt.sign(
      { id: account.id, username: account.name, fullName: account.nick },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user: { username: account.name, fullName: account.nick },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ error: "Server error. Please try again later." });
  }
}
