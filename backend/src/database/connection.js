const mysql2 = require("mysql2/promise")
require("dotenv").config()

const connection = mysql2.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
})

module.exports = connection
