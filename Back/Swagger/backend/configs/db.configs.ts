import mysql from "mysql2";
import dotenv from "dotenv"

dotenv.config();

const mysqlPool = mysql.createPool({
    database : process.env.DB_NAME,
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    port : 3306,
    connectionLimit : 100,
    waitForConnections : true,
    queueLimit : 0
})

const connection = mysqlPool.promise();


/**
 *  디비 연결 바로 테스트하는 방법
 * 
 *  아래와 같이 작성 후
 * 
 *  터미널에 ts-node 경로 
 *  작성 후 실행
 * 
 * 
 * (async()=>{
    try{
        const [result, feild] = await connection.query("SELECT * FROM USER");

        console.log(result);
    }catch(err){
        console.log("error" + err);
    }  finally{
        connection.end();
    }

})();
 * */





export default connection;