const db = require('../config/db')

/*
생성
조회
수정
삭제
*/


module.exports = {
    //조회
    findUser:(username)=> new Promise((resolve,reject)=>{
        const sql = `select * from login where name = "${username}"`
        db.query(sql,(err, result)=>{
            if(err) reject({msg:'false'})
            if(result.length){
                resolve({
                    msg: 'true',
                    username:result[0].name
                })
            }
            
        })
    })
}