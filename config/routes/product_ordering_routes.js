//  === Requirements ===
const express = require('express')
const product_ordering_routes = express.Router()
const product_ordering_controller = require("../../app/controllers/product_ordering_controller")

//  === Routes ===
product_ordering_routes.post("/order", (request, response) => {
    response.send( product_ordering_controller.create( request ) )
})
product_ordering_routes.get("/order/:id", (request, response) => {
    response.send( product_ordering_controller.show( request ) ) 
})
product_ordering_routes.get("/order/", (request, response) => {
    response.send( product_ordering_controller.index( request ) )
})
product_ordering_routes.put("/order/:id", (request, response) => {
    response.send( product_ordering_controller.update( request ) )
})
product_ordering_routes.delete("/order/:id", (request, response) => {
    response.send( product_ordering_controller.destroy( request ) )
})

product_ordering_routes.get("/cancel/", (request, response) => {
    response.send( product_ordering_controller.index_cancel( request ) )
})
product_ordering_routes.post("/cancel/", (request, response) => {
    response.send( product_ordering_controller.create_cancel( request ) )
})
product_ordering_routes.get("/cancel/:cancel_id", (request, response) => {
    response.send( product_ordering_controller.show_cancel( request ) )
})


product_ordering_routes.post("/listener/order/create_event", (request, response) => {
    response.send( product_ordering_controller.create_listener_create_event( request ) )
})
product_ordering_routes.post("/listener/order/attribute_value_change", (request, response) => {
    response.send( product_ordering_controller.create_listener_attribute_value_change_event( request ) )
})
product_ordering_routes.post("/listener/order/delete_event", (request, response) => {
    response.send( product_ordering_controller.create_listener_delete_event( request ) )
})
product_ordering_routes.post("/listener/order/state_change_event", (request, response) => {
    response.send( product_ordering_controller.create_listener_state_change_event( request ) )
})
product_ordering_routes.post("/listener/order/information_required_event", (request, response) => {
    response.send( product_ordering_controller.create_listener_information_required_event( request ) )
})


product_ordering_routes.post("/listener/cancel/create_event", (request, response) => {
    response.send( product_ordering_controller.create_listener_cancel_create_event( request ) )
})
product_ordering_routes.post("/listener/cancel/attribute_value_change", (request, response) => {
    response.send( product_ordering_controller.create_listener_cancel_attribute_value_change_event( request ) )
})
product_ordering_routes.post("/listener/cancel/delete_event", (request, response) => {
    response.send( product_ordering_controller.create_listener_cancel_delete_event( request ) )
})
product_ordering_routes.post("/listener/cancel/state_change_event", (request, response) => {
    response.send( product_ordering_controller.create_listener_cancel_state_change_event( request ) )
})
product_ordering_routes.post("/listener/cancel/information_required_event", (request, response) => {
    response.send( product_ordering_controller.create_listener_cancel_information_required_event( request ) )
})


product_ordering_routes.post("/hub", (request, response) => {
    response.send( product_ordering_controller.create_hub( request ) )
})
product_ordering_routes.delete("/hub/:hub_id", (request, response) => {
response.send( product_ordering_controller.destroy_hub( request ) )
})

//  === Exports ===
module.exports = product_ordering_routes