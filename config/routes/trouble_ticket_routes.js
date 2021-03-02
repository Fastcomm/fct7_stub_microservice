//  === Requirements ===
const express = require('express')
const trouble_ticket_routes = express.Router()
const trouble_ticket_controller = require("../../app/controllers/trouble_ticket_controller")

//  === Routes ===
trouble_ticket_routes.post("/", (request, response) => {
    response.send( trouble_ticket_controller.create( request ) )
})

trouble_ticket_routes.get("/", (request, response) => {
    response.send( trouble_ticket_controller.index( request ) )
})

trouble_ticket_routes.get("/:id", (request, response) => {
    response.send( trouble_ticket_controller.show( request ) )
})

trouble_ticket_routes.put("/:id", (request, response) => {
    response.send( trouble_ticket_controller.update( request ) )
})

trouble_ticket_routes.delete("/:id", (request, response) => {
    response.send( trouble_ticket_controller.destroy( request ) )
})

//  === Exports ===
module.exports = trouble_ticket_routes