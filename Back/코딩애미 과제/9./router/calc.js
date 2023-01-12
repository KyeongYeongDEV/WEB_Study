const route = require("express").Router()
const Calculate = require("../controller/controller.calculate")
const calculate = new Calculate()

route.get("/add", (req,res)=>{
    const {operand1, operand2} = req.body
    const resultOfAddition = calculate.addition(operand1,operand2)

    res.send(resultOfAddition.toString())
})

module.exports = route