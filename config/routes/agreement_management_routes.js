//  === Requirements ===
var express = require('express')
var agreement_management_routes = express.Router()
var agreement_management_controller = require("../../app/controllers/agreement_management_controller")

//  === Routes ===
agreement_management_routes.get('/appointment', (request, response) => {
  response.send( account_management_controller.index_party(request) )
})
agreement_management_routes.post('/appointment', (request, response) => {
  response.send( account_management_controller.create_party(request) )
})
agreement_management_routes.get('/appointment/:id', (request, response) => {
  response.send( account_management_controller.show_party(request) )
})
agreement_management_routes.patch('/appointment/:id', (request, response) => {
  response.send( account_management_controller.update_party(request) )
})
agreement_management_routes.delete('/appointment/:id', (request, response) => {
  response.send( account_management_controller.destroy_party(request) )
})

//  === Exports ===
module.exports = agreement_management_routes