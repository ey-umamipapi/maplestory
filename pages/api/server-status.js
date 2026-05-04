import net from "net";

const HOST = process.env.GAME_HOST || "127.0.0.1";
const PORT = parseInt(process.env.GAME_PORT || "8484", 10);
const TIMEOUT = 3000;

export default function handler(req, res) {
  const socket = new net.Socket();
  let resolved = false;

  function done(online) {
    if (resolved) return;
    resolved = true;
    socket.destroy();
    res.status(200).json({ online });
  }

  socket.setTimeout(TIMEOUT);
  socket.on("connect", () => done(true));
  socket.on("timeout", () => done(false));
  socket.on("error", () => done(false));

  socket.connect(PORT, HOST);
}
