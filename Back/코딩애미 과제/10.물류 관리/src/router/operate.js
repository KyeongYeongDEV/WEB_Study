const route = require("express").Router()

const ConsumptionTime = require("../controller/consumptionTime")
const consumptionTime = new ConsumptionTime()

route.get("/", (req,res)=>{
    const result = consumptionTime.operateSector()

    res.send(result)
})

module.exports = route