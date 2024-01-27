const express = require("express")

const fileManagementRoutes = express.Router()

fileManagementRoutes.route("/health").get(()=>{
    return ("Hello world")
})