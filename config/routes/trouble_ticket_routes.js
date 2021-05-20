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

trouble_ticket_routes.post("/listener/create_Event", (request, response) => {
    response.send( trouble_ticket_controller.create_listener_create_event( request ) )
})
trouble_ticket_routes.post("/listener/attribute_value_change_event", (request, response) => {
    response.send( trouble_ticket_controller.create_listener_attribute_value_change_event( request ) )
})
trouble_ticket_routes.post("/listener/status_change_event", (request, response) => {
    response.send( trouble_ticket_controller.create_listener_status_change_event( request ) )
})
trouble_ticket_routes.post("/listener/delete_event", (request, response) => {
    response.send( trouble_ticket_controller.create_listener_delete_event( request ) )
})
trouble_ticket_routes.post("/listener/resolved_event", (request, response) => {
    response.send( trouble_ticket_controller.create_listener_resolved_event( request ) )
})
trouble_ticket_routes.post("/listener/information_required_event", (request, response) => {
    response.send( trouble_ticket_controller.create_listener_information_required_event( request ) )
})

//  === Exports ===
module.exports = trouble_ticket_routes