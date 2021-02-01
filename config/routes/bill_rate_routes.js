//  === Requirements ===
const express = require('express')
const bill_rate_routes = express.Router()
const bill_management_controller = require('../../app/controllers/bill_management_controller')

//  === Routes ===
bill_rate_routes.get("/:id", (request, response) => {
    response.send( bill_management_controller.show_rate( request ) )
})

bill_rate_routes.get("/", (request, response) => {
    response.send( bill_management_controller.index_rate( request ) )
})

//  === Exports ===
module.exports = bill_rate_routes