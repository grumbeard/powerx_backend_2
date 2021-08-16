const dotenv = require("dotenv");
const { Pool } = require("pg");
const fs = require("fs");

dotenv.config();

const postgresURL = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}
@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`;

const sql = fs.readFileSync("./user.sql").toString();

const pool = new Pool({
  connectionString: postgresURL,
});

pool.query(sql, (err, result) => {
  if (err) {
    console.log("Error: ", err);
    process.exit(1);
  }
  console.log(result);
  process.exit(0);
});

pool.query(
  `SELECT * FROM AppUser
    LIMIT 5;`,
  [],
  function (err, result) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(result.rows);
    process.exit(0);
  }
);
