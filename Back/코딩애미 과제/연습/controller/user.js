const db = require('../config/db')
const dotenv = require('dotenv').config()
const TABLE = process.env.DB_TABLE

module.exports ={
    findUser: (username) => new Promise((resolve, reject)=>{
        const sql = `select *from ${TABLE} where mb_name = "${username}}"`
        db.query(sql,(err,result)=>{
            if(err) reject({msg:'false'})
            
            resolve({
                msg: 'true',
                usergroup:result[0].mb_group
            })
            
        })
    }),

    


}