//  === Requirements ===
const express = require('express')
const quote_routes = express.Router()
const quote_management_controller = require("../../app/controllers/quote_management_controller")

//  === Routes ===
quote_routes.post("/", (request, response) => {
    response.send( quote_management_controller.create( request ) )
})

//  === Exports ===
module.exports = quote_routes