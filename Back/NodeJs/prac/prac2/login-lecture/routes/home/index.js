"use strict"; //이런 형식을 쓸 거하는 약속

const express = require("express");
const router = express.Router();//Router()를 불러와준다.

//경로 이동 라우팅 구현
router.get("/",(req,res)=>{ 
    //기존에 "app." 에서 "Router"로 변경
    res.render("home/index")
});

router.get("/login", (req,res)=>{
    res.render("home/login");
});

module.exports = router; //exports를 통해 작성한 module을 밖으로 내보대준다. 