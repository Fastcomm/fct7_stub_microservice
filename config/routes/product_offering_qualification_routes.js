//  === Requirements ===
var express = require('express')
var product_offering_qualification_routes = express.Router()
var product_offering_qualification_controller = require("../../app/controllers/product_offering_qualification_controller")

//  === Routes ===
product_offering_qualification_routes.get('/', (request, response) => {
  response.send( product_offering_qualification_controller.index(request) )
})
product_offering_qualification_routes.post('/', (request, response) => {
  response.send( product_offering_qualification_controller.create(request) )
})
product_offering_qualification_routes.get('/:id', (request, response) => {
  response.send( product_offering_qualification_controller.show(request) )
})
product_offering_qualification_routes.patch('/:id', (request, response) => {
  response.send( product_offering_qualification_controller.update(request) )
})
product_offering_qualification_routes.delete('/:id', (request, response) => {
  response.send( product_offering_qualification_controller.destroy(request) )
})


product_offering_qualification_routes.post('/listener_create_event', (request, response) => {
  response.send( product_offering_qualification_controller.create_listener_create_event(request) )
})
product_offering_qualification_routes.post('/listener_attribute_value_change', (request, response) => {
  response.send( product_offering_qualification_controller.create_listener_attribute_value_change(request) )
})
product_offering_qualification_routes.post('/listener_state_change_event', (request, response) => {
  response.send( product_offering_qualification_controller.create_listener_state_change_event(request) )
})
product_offering_qualification_routes.post('/listener_delete_event', (request, response) => {
  response.send( product_offering_qualification_controller.create_listener_delete_event(request) )
})
product_offering_qualification_routes.post('/listener_information_required_event', (request, response) => {
  response.send( product_offering_qualification_controller.create_listener_information_required_event(request) )
})

product_offering_qualification_routes.post("/hub", (request, response) => {
  response.send( product_offering_qualification_controller.create_hub( request ) )
})
product_offering_qualification_routes.delete("/hub/:hub_id", (request, response) => {
  response.send( product_offering_qualification_controller.destroy_hub( request ) )
})

//  === Exports ===
module.exports = product_offering_qualification_routes