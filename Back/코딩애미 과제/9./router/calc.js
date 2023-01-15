const route = require("express").Router()
const Calculate = require("../controller/controller.calculate")
const calculate = new Calculate()

route.get("/add", (req,res)=>{
    const {operand1, operand2} = req.body
    const resultOfAddition = calculate.addition(operand1,operand2)

    res.send(resultOfAddition.toString())
})

route.get("/sub", (req, res)=>{
    const { operand1, operand2} = req.body
    const resultOfSubtraction = calculate.subtraction(operand1, operand2)

    res.send(resultOfSubtraction.toString())
})

route.get("/multiple", (req,res)=>{
    const {operand1, operand2} = req.body
    const resultOfMultiple = calculate.multiplication(operand1, operand2)

    res.send(resultOfMultiple.toString())
})

route.get("/divide", (req,res)=>{
    const {operand1, operand2} = req.body
    const resultOfDivide = calculate.division(operand1, operand2)

    res.send(resultOfDivide.toString())
})

module.exports = route