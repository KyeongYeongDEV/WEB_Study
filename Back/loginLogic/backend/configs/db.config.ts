import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config()

const mysqlPool = mysql.createPool({
    database : process.env.DB_DATABASE || "",
    host : process.env.DB_HOST || "",
    port: 3306,
    user : process.env.DB_USER|| "",
    password : process.env.DB_PASSWORD || "",
    waitForConnections : true,
    connectionLimit : 5,
    queueLimit : 0
});

const connection = mysqlPool.promise()

export  {connection};