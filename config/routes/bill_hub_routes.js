//  === Requirements ===
const express = require('express')
const bill_hub_routes = express.Router()
const bill_management_controller = require("../../app/controllers/bill_management_controller")

//  === Routes ===
bill_hub_routes.post("/", (request, response) => {
    response.send( bill_management_controller.create_hub( request ) )
})

bill_hub_routes.delete("/:id", (request, response) => {
    response.send( bill_management_controller.destroy_hub( request ) )
})

//  === Exports ===
module.exports = bill_hub_routes