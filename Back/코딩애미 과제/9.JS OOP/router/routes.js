const route = require("express").Router()
const hello = require("./hello")
const calc = require("./calc")

route.use("/hello", hello)
route.use("/calc", calc)

module.exports = route