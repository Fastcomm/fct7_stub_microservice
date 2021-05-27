//  === Requirements ===
var express = require('express')
var shopping_cart_management_routes = express.Router()
var shopping_cart_management_controller = require("../../app/controllers/shopping_cart_management_controller")

//  === Routes ===
shopping_cart_management_routes.get('/', (request, response) => {
  response.send( shopping_cart_management_controller.index(request) )
})
shopping_cart_management_routes.post('/', (request, response) => {
    response.send( shopping_cart_management_controller.create(request) )
})
shopping_cart_management_routes.get('/:id', (request, response) => {
    response.send( shopping_cart_management_controller.show(request) )
})
shopping_cart_management_routes.patch('/:id', (request, response) => {
    response.send( shopping_cart_management_controller.update(request) )
})
shopping_cart_management_routes.delete('/:id', (request, response) => {
    response.send( shopping_cart_management_controller.destroy(request) )
})
shopping_cart_management_routes.post('/hub', (request, response) => {
    response.send( shopping_cart_management_controller.create_hub(request) )
})
shopping_cart_management_routes.delete('/hub/:id', (request, response) => {
    response.send( shopping_cart_management_controller.destroy_hub(request) )
})

shopping_cart_management_routes.post('/listener_create_event', (request, response) => {
    response.send( shopping_cart_management_controller.create_listener_create_event(request) )
})
shopping_cart_management_routes.post('/listener_attribute_value_change_event', (request, response) => {
    response.send( shopping_cart_management_controller.create_listener_attribute_value_change_event(request) )
})
shopping_cart_management_routes.post('/listener_delete_event', (request, response) => {
    response.send( shopping_cart_management_controller.create_listener_delete_event(request) )
})

//  === Exports ===
module.exports = shopping_cart_management_routes