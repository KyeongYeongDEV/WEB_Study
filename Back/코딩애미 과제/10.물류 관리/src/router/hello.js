const route = require("express").Router()

route.get("/", (req,res)=>{
    const {operand1, operand2} = req.body
    const result = operand1 + operand2
    
    res.send(result.toString())
})

module.exports = route