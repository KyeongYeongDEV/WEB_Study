const dotenv = require("dotenv").config()
const ManageServer  = require("./manageServer")
const ManagePORT = process.env.MANAGE_PORT
const manageServer = new ManageServer(ManagePORT)



const route = require("./router/routes")

manageServer.run()
manageServer.setRoute("/", route) 

