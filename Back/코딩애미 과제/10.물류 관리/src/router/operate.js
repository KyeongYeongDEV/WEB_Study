const route = require("express").Router()

const ConsumptionTime = require("../controller/consumptionTime")
const consumptionTime = new ConsumptionTime()

route.get("/", (req,res)=>{
    const {operand1, operand2} = req.body
    const c = operand1 + operand2
    const result = consumptionTime.operateSector()
    console.log(result)
    console.log(c)
    res.send(result.toString())
})

module.exports = route