//  === Requirements ===
const express = require('express')
const trouble_ticket_hub_routes = express.Router()
const trouble_ticket_controller = require("../../app/controllers/trouble_ticket_controller")

//  === Routes ===
trouble_ticket_hub_routes.post("/", (request, response) => {
    response.send( trouble_ticket_controller.create_hub( request ) )
})

trouble_ticket_hub_routes.delete("/:id", (request, response) => {
    response.send( trouble_ticket_controller.destroy_hub( request ) )
})

//  === Exports ===
module.exports = trouble_ticket_hub_routes