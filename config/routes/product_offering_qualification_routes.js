//  === Requirements ===
var express = require('express')
var product_offering_qualification_routes = express.Router()
var product_offering_qualification_controller = require("../../app/controllers/product_offering_qualification_controller")

//  === Routes ===
product_offering_qualification_routes.get('/', (request, response) => {
  response.send( product_offering_qualification_controller.index(request) )
})

//  === Exports ===
module.exports = product_offering_qualification_routes