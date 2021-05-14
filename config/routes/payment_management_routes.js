//  === Requirements ===
var express = require('express')
var payment_management_routes = express.Router()
var payment_management_controller = require("../../app/controllers/payment_management_controller")

//  === Routes ===

payment_management_routes.get('/refund', (request, response) => {
    response.send( payment_management_controller.index_refund(request) )
})
payment_management_routes.post('/refund', (request, response) => {
    response.send( payment_management_controller.create_refund(request) )
})
payment_management_routes.get('/refund/:refund_id', (request, response) => {
    response.send( payment_management_controller.show_refund(request) )
})

payment_management_routes.get('/', (request, response) => {
    response.send( payment_management_controller.index_payment(request) )
})
payment_management_routes.post('/', (request, response) => {
    response.send( payment_management_controller.create_payment(request) )
})
payment_management_routes.get('/:payment_id', (request, response) => {
    response.send( payment_management_controller.show_payment(request) )
})

payment_management_routes.post('/listner_create_event', (request, response) => {
    response.send( payment_management_controller.create_listner_payment_create_event(request) )
})
payment_management_routes.post('/listner_attribute_value_change', (request, response) => {
    response.send( payment_management_controller.create_listner_payment_attribute_value_change_event(request) )
})
payment_management_routes.post('/listner_state_change_event', (request, response) => {
    response.send( payment_management_controller.create_listner_payment_state_change_event(request) )
})
payment_management_routes.post('/listner_delete_event', (request, response) => {
    response.send( payment_management_controller.create_listner_payment_delete_event(request) )
})

payment_management_routes.post('/refund/listner_create_event', (request, response) => {
    response.send( payment_management_controller.create_listner_refund_create_event(request) )
})
payment_management_routes.post('/refund/listner_attribute_value_change', (request, response) => {
    response.send( payment_management_controller.create_listner_refund_attribute_value_change_event(request) )
})
payment_management_routes.post('/refund/listner_state_change_event', (request, response) => {
    response.send( payment_management_controller.create_listner_refund_state_change_event(request) )
})
payment_management_routes.post('/refund/listner_delete_event', (request, response) => {
    response.send( payment_management_controller.create_listner_refund_delete_event(request) )
})


payment_management_routes.post("/hub", (request, response) => {
    response.send( payment_management_controller.create_hub( request ) )
})
payment_management_routes.delete("/hub/:hub_id", (request, response) => {
    response.send( payment_management_controller.destroy_hub( request ) )
})




//  === Exports ===
module.exports = payment_management_routes