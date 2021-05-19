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

//  === Exports ===
module.exports = product_offering_qualification_routes