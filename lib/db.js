import mysql from "mysql2/promise";

// Reuse the connection pool across serverless invocations
let pool;

export function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host:            process.env.DB_HOST || "120.158.134.40",
      port:            parseInt(process.env.DB_PORT || "3306"),
      user:            process.env.DB_USER || "root",
      password:        process.env.DB_PASSWORD || "umamipapi2007",
      database:        process.env.DB_NAME || "cosmic",
      waitForConnections: true,
      connectionLimit: 5,
      // Required for Vercel → external MySQL (SSL optional; remove if your MySQL doesn't have SSL)
      // ssl: { rejectUnauthorized: false },
    });
  }
  return pool;
}
