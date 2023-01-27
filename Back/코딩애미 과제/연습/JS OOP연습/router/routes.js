const route = require("express").Router()
const hello = require("./hello")

route.use("/hello",hello)

module.exports = route