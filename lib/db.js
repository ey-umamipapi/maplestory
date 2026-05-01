import mysql from "mysql2/promise";

// Reuse the connection pool across serverless invocations
let pool;

export function getPool() {
  if (!pool) {
    const config = {
      host:            process.env.DB_HOST || "120.158.134.40",
      port:            parseInt(process.env.DB_PORT || "3306"),
      user:            process.env.DB_USER || "root",
      password:        process.env.DB_PASSWORD || "umamipapi2007",
      database:        process.env.DB_NAME || "cosmic",
      waitForConnections: true,
      connectionLimit: 5,
    };
    console.log("MySQL config:", { host: config.host, user: config.user, database: config.database });
    pool = mysql.createPool(config);
  }
  return pool;
}
