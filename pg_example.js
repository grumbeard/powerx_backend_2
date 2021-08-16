const dotenv = require("dotenv");
const { Pool } = require("pg");

dotenv.config();

const postgresURL = `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}
@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DB}`;

const pool = new Pool({
  connectionString: postgresURL,
});

pool.query(
  `SELECT userid, name FROM payroll
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
