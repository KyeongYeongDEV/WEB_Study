const route = require("express").Router()
const express = require("express");
const Calculate = require("../controller/calculate/calculate")
const calculate = new Calculate()
const Arithmetic  = require("../model/enum");

const arithmetic = new Arithmetic()

route.get("/add", (req,res)=>{
    const {operand1, operand2} = req.body
    const resultOfAddition = calculate.calculateNumber(operand1,operand2,arithmetic.getPlus())

    res.send(resultOfAddition.toString())
})

route.get("/sub", (req, res)=>{
    const { operand1, operand2} = req.body
    const resultOfSubtraction = calculate.calculateNumber(operand1, operand2,arithmetic.getMinus())
        res.send(resultOfSubtraction.toString())
})

route.get("/multiple", (req,res)=>{
    const {operand1, operand2} = req.body
    const resultOfMultiple = calculate.calculateNumber(operand1, operand2,arithmetic.getMultyply())

    res.send(resultOfMultiple.toString())
})

route.get("/divide", (req,res)=>{
    const {operand1, operand2} = req.body
    const resultOfDivide = calculate.calculateNumber(operand1, operand2,arithmetic.getDivied())

    if(resultOfDivide === false){
        const Error = require("../controller/calculate/Error")
        res.send(new Error().ZeroDiviedError())
    }else{
        res.send(resultOfDivide.toString())
    }
    
})

module.exports = route