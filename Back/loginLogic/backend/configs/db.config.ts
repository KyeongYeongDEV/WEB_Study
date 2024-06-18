import mysql from "mysql2";
import dotenv from "dotenv"

dotenv.config();
const port = process.env.DB_PORT || 3306;
const connectionPool = mysql.createPool({
    host : process.env.DB_HOST || "",
    database : process.env.DB_DATABASE|| "",
    user : process.env.DB_USER|| "",
    password : process.env.DB_PASSWORD|| "",
    port : port as number,
    connectionLimit : 0,
    waitForConnections : true,
    queueLimit : 0
});

const connection = connectionPool.promise();

export default connection;