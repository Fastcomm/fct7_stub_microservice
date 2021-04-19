//  === Requirements ===
var express = require('express')
var product_catalog_management_routes = express.Router()
var product_catalog_management_controller = require("../../app/controllers/product_catalog_management_controller")

//  === Routes ===
product_catalog_management_routes.get('/catalog', (request, response) => {
  response.send( product_catalog_management_controller.index_catalog(request) )
})
product_catalog_management_routes.get('/catalog/:id', (request, response) => {
  response.send( product_catalog_management_controller.show_catalog(request) )
})
product_catalog_management_routes.post('/catalog', (request, response) => {
    response.send( product_catalog_management_controller.create_catalog(request) )
})
product_catalog_management_routes.patch('/catalog/:id', (request, response) => {
    response.send( product_catalog_management_controller.update_catalog(request) )
})
product_catalog_management_routes.delete('/catalog/:id', (request, response) => {
    response.send( product_catalog_management_controller.destroy_catalog(request) )
})

product_catalog_management_routes.get('/category', (request, response) => {
  response.send( product_catalog_management_controller.index_category(request) )
})
product_catalog_management_routes.get('/category/:id', (request, response) => {
  response.send( product_catalog_management_controller.show_category(request) )
})
product_catalog_management_routes.post('/category', (request, response) => {
    response.send( product_catalog_management_controller.create_category(request) )
})
product_catalog_management_routes.patch('/category/:id', (request, response) => {
    response.send( product_catalog_management_controller.update_category(request) )
})
product_catalog_management_routes.delete('/category/:id', (request, response) => {
    response.send( product_catalog_management_controller.destroy_category(request) )
})

product_catalog_management_routes.get('/product_offering', (request, response) => {
  response.send( product_catalog_management_controller.index_product_offering(request) )
})
product_catalog_management_routes.get('/product_offering/:id', (request, response) => {
  response.send( product_catalog_management_controller.show_product_offering(request) )
})
product_catalog_management_routes.post('/product_offering', (request, response) => {
    response.send( product_catalog_management_controller.create_product_offering(request) )
})
product_catalog_management_routes.patch('/product_offering/:id', (request, response) => {
    response.send( product_catalog_management_controller.update_product_offering(request) )
})
product_catalog_management_routes.delete('/product_offering/:id', (request, response) => {
    response.send( product_catalog_management_controller.destroy_product_offering(request) )
})

product_catalog_management_routes.get('/product_offering_price', (request, response) => {
  response.send( product_catalog_management_controller.index(request) )
})
product_catalog_management_routes.get('/product_offering_price/:id', (request, response) => {
  response.send( product_catalog_management_controller.show(request) )
})
product_catalog_management_routes.post('/product_offering_price', (request, response) => {
    response.send( product_catalog_management_controller.create(request) )
})
product_catalog_management_routes.patch('/product_offering_price/:id', (request, response) => {
    response.send( product_catalog_management_controller.update(request) )
})
product_catalog_management_routes.delete('/product_offering_price/:id', (request, response) => {
    response.send( product_catalog_management_controller.destroy(request) )
})

product_catalog_management_routes.get('/product_specification', (request, response) => {
  response.send( product_catalog_management_controller.index(request) )
})
product_catalog_management_routes.get('/product_specification/:id', (request, response) => {
  response.send( product_catalog_management_controller.show(request) )
})
product_catalog_management_routes.post('/product_specification', (request, response) => {
    response.send( product_catalog_management_controller.create(request) )
})
product_catalog_management_routes.patch('/product_specification/:id', (request, response) => {
    response.send( product_catalog_management_controller.update(request) )
})
product_catalog_management_routes.delete('/product_specification/:id', (request, response) => {
    response.send( product_catalog_management_controller.destroy(request) )
})

product_catalog_management_routes.get('/import_job', (request, response) => {
  response.send( product_catalog_management_controller.index(request) )
})
product_catalog_management_routes.get('/import_job/:id', (request, response) => {
  response.send( product_catalog_management_controller.show(request) )
})
product_catalog_management_routes.post('/import_job', (request, response) => {
    response.send( product_catalog_management_controller.create(request) )
})
product_catalog_management_routes.delete('/import_job/:id', (request, response) => {
    response.send( product_catalog_management_controller.destroy(request) )
})

product_catalog_management_routes.get('/export_job', (request, response) => {
  response.send( product_catalog_management_controller.index(request) )
})
product_catalog_management_routes.get('/export_job/:id', (request, response) => {
  response.send( product_catalog_management_controller.show(request) )
})
product_catalog_management_routes.post('/export_job', (request, response) => {
    response.send( product_catalog_management_controller.create(request) )
})
product_catalog_management_routes.delete('/export_job/:id', (request, response) => {
    response.send( product_catalog_management_controller.destroy(request) )
})

product_catalog_management_routes.post("/hub", (request, response) => {
  response.send( product_catalog_management_controller.create_hub( request ) )
})
product_catalog_management_routes.delete("/hub/:hub_id", (request, response) => {
  response.send( product_catalog_management_controller.destroy_hub( request ) )
})
product_catalog_management_routes.post("/client/listener", (request, response) => {
  response.send( product_catalog_management_controller.create_client_listener( request ) )
})



//  === Exports ===
module.exports = product_catalog_management_routes