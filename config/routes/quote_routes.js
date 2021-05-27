//  === Requirements ===
const express = require('express')
const quote_routes = express.Router()
const quote_management_controller = require("../../app/controllers/quote_management_controller")

//  === Routes ===
quote_routes.get('/', (request, response) => {
    response.send( quote_management_controller.index(request) )
})
quote_routes.post('/', (request, response) => {
    response.send( quote_management_controller.create(request) )
})
quote_routes.get('/:id', (request, response) => {
    response.send( quote_management_controller.show(request) )
})
quote_routes.patch('/:id', (request, response) => {
    response.send( quote_management_controller.update(request) )
})
quote_routes.delete('/:id', (request, response) => {
    response.send( quote_management_controller.destroy(request) )
})

quote_routes.post('/listener/create_event', (request, response) => {
    response.send( quote_management_controller.create_listener_create_event(request) )
})
quote_routes.post('/listener/attribute_value_change_event', (request, response) => {
    response.send( quote_management_controller.create_listener_attribute_value_change_event(request) )
})
quote_routes.post('/listener/state_change_event', (request, response) => {
    response.send( quote_management_controller.create_listener_state_change_event(request) )
})
quote_routes.post('/listener/delete_event', (request, response) => {
    response.send( quote_management_controller.create_listener_delete_event(request) )
})
quote_routes.post('/listener/quote_information', (request, response) => {
    response.send( quote_management_controller.create_listener_quote_information_required_event(request) )
})


quote_routes.post("/hub", (request, response) => {
    response.send( quote_management_controller.create_hub( request ) )
})
quote_routes.delete("/hub/:hub_id", (request, response) => {
    response.send( quote_management_controller.destroy_hub( request ) )
})


//  === Exports ===
module.exports = quote_routes