const dotenv = require("dotenv");
const { Pool } = require("pg");
const fs = require("fs");
const { resolve } = require("path");

dotenv.config();

const postgresURL = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}
@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`;

const sql = fs.readFileSync("./user.sql").toString();
const pool = new Pool({
  connectionString: postgresURL,
});

function seedDB() {
  pool.query(sql, (err, result) => {
    if (err) {
      console.log("Error: ", err);
      process.exit(1);
    }
    console.log(result);
  });
}

function checkCredentials(username, password) {
  return new Promise((res, rej) => {
    pool.query(
      `SELECT * FROM AppUser
        WHERE login='${username}' AND password='${password}';`,
      [],
      function (err, result) {
        if (err) {
          console.log(err);
          rej({ success: false, user: undefined });
        }
        res({ success: true, user: result.rows[0] });
      }
    );
  });
}

function getUsers() {
  return new Promise((res, rej) => {
    pool.query(
      `SELECT login, password FROM AppUser`,
      [],
      function (err, result) {
        if (err) {
          console.log(err);
          rej({ success: false, users: undefined });
        } else {
          res({ success: true, users: result.rows });
        }
      }
    );
  });
}

module.exports = { seedDB, checkCredentials, getUsers };
