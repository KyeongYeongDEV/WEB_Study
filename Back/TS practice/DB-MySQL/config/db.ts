import mysql2, { Connection } from "mysql2";

const connection : Connection = mysql2.createConnection({
    host : "localhost",
    port : 3306,
    user : "root",
    password : "R3c0mM3nd3dP@ssw0rd!",
    database : "asdf"
});

export default connection;