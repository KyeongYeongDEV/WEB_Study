const route = require("express").Router()

const ConsumptionTime = require("../controller/consumptionTime")
const consumptionTime = new ConsumptionTime()

route.get("/operate", (req,res)=>{
    res.send(consumptionTime.operateSector().toString())
})

module.exports = route