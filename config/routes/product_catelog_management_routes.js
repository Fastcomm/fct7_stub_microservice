//  === Requirements ===
var express = require('express')
var product_catelog_management_routes = express.Router()
var product_catelog_management_controller = require("../../app/controllers/product_catelog_management_controller")

//  === Routes ===
product_catelog_management_routes.all('/', (request, response) => {
  response.send( product_catelog_management_controller.default(request) )
})

//  === Exports ===
module.exports = product_catelog_management_routes