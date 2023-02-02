const route = require("express").Router()

const hello = require("../router/hello")

route.use("/hello",hello)
module.exports = route