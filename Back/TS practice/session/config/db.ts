import mysql, {Connection} from "mysql2";

const connectionPool = mysql.createPool({
    host : "localhost",
    port : 3306,
    user : "root",
    password : "R3c0mM3nd3dP@ssw0rd!",
    database : "asdf",
    waitForConnections : true,
    connectionLimit : 5,
    queueLimit : 0    
}).promise()


export default connectionPool;