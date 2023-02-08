const route = require("express").Router()

const hello = require("./hello")
const operate = require("./operate")

route.use("/hello",hello)
route.use("/operate", operate)

module.exports = route