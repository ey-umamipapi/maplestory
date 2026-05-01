import mysql from "mysql2/promise";

// Reuse the connection pool across serverless invocations
let pool;

export function getPool() {
  if (!pool) {
    const config = {
      host:            "120.158.134.40",
      port:            3306,
      user:            "root",
      password:        "umamipapi2007",
      database:        "cosmic",
      waitForConnections: true,
      connectionLimit: 5,
    };
    pool = mysql.createPool(config);
  }
  return pool;
}
