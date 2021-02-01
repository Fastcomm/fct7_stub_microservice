//  === Requirements ====
const express = require('express')
const bill_routes = express.Router()
const bill_management_controller = require("../../app/controllers/bill_management_controller")

//  === Routes ===
bill_routes.get("/:id", (request, response) => {
    response.send( bill_management_controller.show( request ) )
})

bill_routes.get("/", (request, response) => {
    response.send( bill_management_controller.index( request ) )
})

bill_routes.put("/:id", (request, response) => {
    response.send( bill_management_controller.update( request ) )
})

//  === Exports ===
module.exports = bill_routes