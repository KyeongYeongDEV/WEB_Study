const server = require("./ServerManager").ServerManager
const dotenv = require("dotenv").config()
const port = process.env.SERVER_PORT
const serverManager = new server(port)




serverManager.run()
serverManager.setRoute("/", require("./router/routes"))