const route = require("express").Router()
const Calculate = require("../controller/controller.calculate")
const calculate = new Calculate()

const arithmetic = {
    PLUS : "+",
    MINUS : "-",
    MULTYPLY : "*",
    DIVIED : "/"
}

route.get("/add", (req,res)=>{
    const {operand1, operand2} = req.body
    const resultOfAddition = calculate.calculateNumber(operand1,operand2,arithmetic.PLUS)

    res.send(resultOfAddition.toString())
})

route.get("/sub", (req, res)=>{
    const { operand1, operand2} = req.body
    const resultOfSubtraction = calculate.calculateNumber(operand1, operand2,arithmetic.MINUS)

    res.send(resultOfSubtraction.toString())
})

route.get("/multiple", (req,res)=>{
    const {operand1, operand2} = req.body
    const resultOfMultiple = calculate.calculateNumber(operand1, operand2,arithmetic.MULTYPLY)

    res.send(resultOfMultiple.toString())
})

route.get("/divide", (req,res)=>{
    const {operand1, operand2} = req.body
    const resultOfDivide = calculate.calculateNumber(operand1, operand2,arithmetic.DIVIED)

    res.send(resultOfDivide.toString())
})

module.exports = route