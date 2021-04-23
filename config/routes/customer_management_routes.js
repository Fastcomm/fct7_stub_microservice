//  === Requirements ===
var express = require('express')
var customer_management_routes = express.Router()
var customer_management_controller = require("../../app/controllers/customer_management_controller")

//  === Routes ===
customer_management_routes.post('/', (request, response) => {
    response.send( customer_management_controller.create(request) )
})
customer_management_routes.get('/', (request, response) => {
    response.send( customer_management_controller.index(request) )
})
customer_management_routes.patch('/:id', (request, response) => {
    response.send( customer_management_controller.update(request) )
})
customer_management_routes.get('/:id', (request, response) => {
    response.send( customer_management_controller.show(request) )
})
customer_management_routes.delete('/:id', (request, response) => {
    response.send( customer_management_controller.destroy(request) )
})

//  === Exports ===
module.exports = customer_management_routes