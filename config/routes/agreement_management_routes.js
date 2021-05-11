//  === Requirements ===
var express = require('express')
var agreement_management_routes = express.Router()
var agreement_management_controller = require("../../app/controllers/agreement_management_controller")

//  === Routes ===
agreement_management_routes.get('/', (request, response) => {
  response.send( agreement_management_controller.index(request) )
})
agreement_management_routes.post('/', (request, response) => {
  response.send( agreement_management_controller.create(request) )
})
agreement_management_routes.get('/:id', (request, response) => {
  response.send( agreement_management_controller.show(request) )
})
agreement_management_routes.patch('/:id', (request, response) => {
  response.send( agreement_management_controller.update(request) )
})
agreement_management_routes.delete('/:id', (request, response) => {
  response.send( agreement_management_controller.destroy(request) )
})

agreement_management_routes.get('/specification', (request, response) => {
  response.send( agreement_management_controller.index_agreement_specification(request) )
})
agreement_management_routes.post('/specification', (request, response) => {
  response.send( agreement_management_controller.create_agreement_specification(request) )
})
agreement_management_routes.get('/specification/:id', (request, response) => {
  response.send( agreement_management_controller.show_agreement_specification(request) )
})
agreement_management_routes.patch('/specification/:id', (request, response) => {
  response.send( agreement_management_controller.update_agreement_specification(request) )
})
agreement_management_routes.delete('/specification/:id', (request, response) => {
  response.send( agreement_management_controller.destroy_agreement_specification(request) )
})

agreement_management_routes.post('/hub', (request, response) => {
  response.send( agreement_management_controller.create_hub(request) )
})
agreement_management_routes.delete('/hub/:id', (request, response) => {
  response.send( agreement_management_controller.destroy_hub(request) )
})

//  === Exports ===
module.exports = agreement_management_routes