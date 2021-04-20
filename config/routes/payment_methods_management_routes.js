//  === Requirements ===
var express = require('express')
var payment_method_management_routes = express.Router()
var payment_method_management_controller = require("../../app/controllers/payment_method_management_controller")

//  === Routes ===
agreement_management_routes.get('/', (request, response) => {
  response.send( payment_method_management_controller.index(request) )
})


//  === Exports ===
module.exports = agreement_management_routes