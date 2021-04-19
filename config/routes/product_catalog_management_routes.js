//  === Requirements ===
var express = require('express')
var product_catalog_management_routes = express.Router()
var product_catalog_management_controller = require("../../app/controllers/product_catalog_management_controller")

//  === Routes ===
product_catalog_management_routes.all('/', (request, response) => {
  response.send( product_catalog_management_controller.default(request) )
})

//  === Exports ===
module.exports = product_catalog_management_routes