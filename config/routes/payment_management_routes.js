//  === Requirements ===
var express = require('express')
var payment_management_routes = express.Router()
var payment_management_controller = require("../../app/controllers/payment_management_controller")

//  === Routes ===
payment_management_routes.get('/', (request, response) => {
  response.send( payment_management_controller.index(request) )
})


//  === Exports ===
module.exports = payment_management_routes