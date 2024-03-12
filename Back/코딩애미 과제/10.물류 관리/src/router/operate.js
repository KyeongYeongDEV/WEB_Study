const route = require("express").Router()

const OperateToFactory = require("../controller/operateToFactory")
const operateToFactory = new OperateToFactory()

route.get("/", (req,res)=>{
    const curTime = 20230204    
    let result = `${curTime}\n공장 가동`

    result += operateToFactory.operateSector(curTime)

    res.send(result)    
})

module.exports = route