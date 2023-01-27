const dotenv = require("dotenv").config()
const port = process.env.SERVER_PORT

const serverManager = require("./ServerManager")
const server = new serverManager(port)

server.start()
server.setRoute("/", require("./router/routes"))