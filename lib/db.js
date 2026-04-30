import mysql from "mysql2/promise";

// Reuse the connection pool across serverless invocations
let pool;

export function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host:            process.env.DB_HOST,
      port:            parseInt(process.env.DB_PORT || "3306"),
      user:            process.env.DB_USER,
      password:        process.env.DB_PASSWORD,
      database:        process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 5,
      // Required for Vercel → external MySQL (SSL optional; remove if your MySQL doesn't have SSL)
      // ssl: { rejectUnauthorized: false },
    });
  }
  return pool;
}
