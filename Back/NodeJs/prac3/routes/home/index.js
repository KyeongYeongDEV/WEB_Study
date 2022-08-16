"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/",ctrl.hello); //controller 모듈을 생성하여 명확하게 보여줌
router.get("/login",ctrl.login);//나중에 더 명확하게 명시할 수 있게 함

module.exports = router;