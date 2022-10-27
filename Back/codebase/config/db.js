const mysql  = require('mysql')
const dotenv = require('dotenv').config()

module.exports = mysql.createConnection({
    database:process.env.DB_NAME,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,   
    password:process.env.DB_PW,
    port:process.env.DB_PORT
})