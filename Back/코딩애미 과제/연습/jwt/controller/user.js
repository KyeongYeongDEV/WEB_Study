const db = require('../config/db')
const dotenv = require('dotenv').config()

module.exports={
    //조회
    findUser:(username)=>new Promise((resolve,reject)=>{
        const sql = `select * from ${process.env.DB_TABLE} where name = "${username}"`
        db.query(sql,(err,result)=>{
            if(err) reject({msg:'false'})
            if(result.length){
                resolve({
                    msg:'true',
                    userEmail:result[0].email
                })
            }
        })
    })   
    
    
}