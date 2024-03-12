"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/",ctrl.output.hello); //controller 모듈을 생성하여 명확하게 보여줌
router.get("/login",ctrl.output.login);

router.post("/login",ctrl.process.login);//추가

module.exports = router;