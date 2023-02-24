const route = require("express").Router()

const ConsumptionTime = require("../controller/consumptionTime")
const consumptionTime = new ConsumptionTime()

route.get("/", (req,res)=>{
    const list = consumptionTime.operateSector()
    let result = '공장 가동 결과\n'

    for(let i =0; i < 5; i++) {
        result += list[i]
    }

    res.send(result)

    
})

module.exports = route