const mysql = require('mysql')
const dotenv = require('dotenv')

module.exports = mysql.createConnection({
    database : process.env.DB_NAME,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PW,
    port: process.env.DV_PORT
})