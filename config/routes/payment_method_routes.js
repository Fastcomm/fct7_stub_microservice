//  === Requirements ===
var express = require('express')
var payment_method_routes = express.Router()
var payment_method_controller = require("../../app/controllers/payment_method_controller")

//  === Routes ===
payment_method_routes.get('/', (request, response) => {
    response.send( payment_method_controller.index(request) )
})
payment_method_routes.post('/', (request, response) => {
    response.send( payment_method_controller.create(request) )
})
payment_method_routes.get('/:payment_method_id', (request, response) => {
    response.send( payment_method_controller.show(request) )
})
payment_method_routes.delete('/:payment_method_id', (request, response) => {
    response.send( payment_method_controller.destroy(request) )
})
payment_method_routes.get('/accounts/:account_id', (request, response) => {
    response.send( payment_method_controller.show_accounts(request) )
})

//  === Exports ===
module.exports = payment_method_routes