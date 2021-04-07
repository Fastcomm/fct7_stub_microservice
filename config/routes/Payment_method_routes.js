//  === Requirements ===
var express = require('express')
var Payment_method_routes = express.Router()
var Payment_method_controller = require("../../app/controllers/Payment_method_controller")

//  === Routes ===
Payment_method_routes.get('/', (request, response) => {
    response.send( Payment_method_controller.index(request) )
})
Payment_method_routes.post('/', (request, response) => {
    response.send( Payment_method_controller.create(request) )
})
Payment_method_routes.get('/:payment_method_id', (request, response) => {
    response.send( Payment_method_controller.show(request) )
})
Payment_method_routes.delete('/:payment_method_id', (request, response) => {
    response.send( Payment_method_controller.destroy(request) )
})
Payment_method_routes.get('/accounts/:account_id', (request, response) => {
    response.send( Payment_method_controller.show_accounts(request) )
})

//  === Exports ===
module.exports = Payment_method_routes