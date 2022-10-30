const db = require('../config/db')
const dotenv = require('dotenv').config()

module.exports ={
    findUser: (username) => new Promise((resolve, reject)=>{
        const sql = `select *from member where name = "${username}}"`
        db.query(sql,(err,result)=>{
            if(err) reject({msg:'false'})
            if(result.length){
                resolve({
                    msg: 'true',
                    username:result[0].md_name
                })
            }
        })
    }),


}