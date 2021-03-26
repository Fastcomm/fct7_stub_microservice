//  === Requirements ===
var express = require('express')
var agreement_management_routes = express.Router()
var agreement_management_controller = require("../../app/controllers/agreement_management_controller")

//  === Routes ===
agreement_management_routes.get('/', (request, response) => {
  response.send( agreement_management_controller.index(request) )
})

//  === Exports ===
module.exports = agreement_management_routes