'use strict';

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
        console.log(req.body);
    },
};

module.exports = { //내보낼 때 이름 같에 하기
   output,process,
};