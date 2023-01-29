const route = require("express").Router()

const AnOperator = require("../model/Arithmetic")
const anOperator = new AnOperator()

const Calculate  =require("../controller/calculate/calc")

route.get("/add",(req,res)=>{
    const {operand1, operand2} = req.body
    const result = new Calculate().calculateNumber(operand1, operand2, anOperator.getPlus())
    res.send(result.toString())
})

route.get("/sub",(req,res)=>{
    const {operand1, operand2} = req.body
    const result = new Calculate().calculateNumber(operand1, operand2, anOperator.getMinus())
    res.send(result.toString())
})

route.get("/multiple",(req,res)=>{
    const {operand1, operand2} = req.body
    const result = new Calculate().calculateNumber(operand1, operand2, anOperator.getMultyply())
    res.send(result.toString())
})

route.get("/divide",(req,res)=>{
    const {operand1, operand2} = req.body
    const result = new Calculate().calculateNumber(operand1, operand2, anOperator.getDivide())
    res.send(result.toString())
})
module.exports = route