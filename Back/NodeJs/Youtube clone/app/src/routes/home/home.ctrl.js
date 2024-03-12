'use strict';

const UserStorage = require("../../model/UserStorage");


const output = {
    hello : (req,res)=>{
        res.render("home/index");
    },
    login : (req, res) =>{
        res.render("home/login");
    }
};



const process ={
    login: (req,res)=>{
        const id = req.body.id,
            psword = req.body.psword;
        
        UserStorage.getUsers("id", "psword");
    //     const response ={};
    //     if(users.id.includes(id)){
    //         const idx = users.id.indexOf(id);
    //         if(users.psword[idx] === psword){
    //             response.success = true; // key = success, value = true;
    //             return res.json(response);
    //         }
    //     }
    //     response.success = false;
    //     response.msg = "로그인에 실패하셨습니다."
    //     return res.json(response); 
    },
};

module.exports = { //내보낼 때 이름 같에 하기
   output, process,
};