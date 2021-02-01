//  === Requirements ===
const express = require('express')
const bill_on_demand_routes = express.Router()
const bill_management_controller = require('../../app/controllers/bill_management_controller')

//  === Routes ===
bill_on_demand_routes.post("/", (request, response) => {
    response.send( bill_management_controller.create_on_demand( request ) )
})

bill_on_demand_routes.get("/:id", (request, response) => {
    response.send( bill_management_controller.show_on_demand( request ) )
})

bill_on_demand_routes.get("/", (request, response) => {
    response.send( bill_management_controller.index_on_demand( request ) )
})

//  === Exports ===
module.exports = bill_on_demand_routes