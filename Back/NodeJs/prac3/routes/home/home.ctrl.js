'use strict';
const hello = (req,res)=>{
    res.render("home/index");
};

const login = (req, res) =>{
    res.render("home/login");
};

module.exports = { //내보낼 때 이름 같에 하기
    hello,
    login,
};