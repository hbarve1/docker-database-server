/** @format */

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "172.105.48.158",
  // database: "api",
  password: "postgres",
  port: 5432,
});

pool.query("SELECT 1 + 1 AS solution", (error, results) => {
  if (error) {
    throw error;
  }

  console.log("Postgres => " , results.rows);
});
