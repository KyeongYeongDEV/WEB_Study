const dotenv = require("dotenv").config()

const ClientServer = require("../src/clientServer")
const clientServer = new ClientServer()
const ClientPORT = process.env.CLIENT_PORT

const ManageServer  = require("../src/manageServer")
const manageServer = new ManageServer()
const ManagePORT = process.env.MANGE_PORT

const route = require("../src/router/routes")


clientServer.run(ClientPORT)
clientServer.setRoute("/", route)

manageServer.run(ManagePORT)
manageServer.setRoute("/", route)
