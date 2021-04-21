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


//  === Exports ===
module.exports = payment_management_routes