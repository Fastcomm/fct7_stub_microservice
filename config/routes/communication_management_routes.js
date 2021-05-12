//  === Requirements ===
var express = require('express')
var communication_management_routes = express.Router()
var communication_management_controller = require("../../app/controllers/communication_management_controller")

//  === Routes ===
communication_management_routes.get('/message', (request, response) => {
  response.status(200).send( communication_management_controller.index_message(request) )
})
communication_management_routes.post('/message', (request, response) => {
  response.send( communication_management_controller.create_message(request) )
})
// communication_management_routes.post('/message/send', (request, response) => {
//   response.send( communication_management_controller.create_message_send(request) )
// })
communication_management_routes.get('/message/:id', (request, response) => {
  response.send( communication_management_controller.show_message(request) )
})
communication_management_routes.patch('/message/:id', (request, response) => {
  response.send( communication_management_controller.update_message(request) )
})
communication_management_routes.delete('/message/:id', (request, response) => {
  response.send( communication_management_controller.destroy_message(request) )
})
// communication_management_routes.post('/message/:id/send', (request, response) => {
//   response.send( communication_management_controller.create_send(request) )
// })
communication_management_routes.post("/hub", (request, response) => {
  response.send( communication_management_controller.create_hub( request ) )
})
communication_management_routes.delete("/hub/:hub_id", (request, response) => {
  response.send( communication_management_controller.destroy_hub( request ) )
})
// communication_management_routes.post("/client/listener", (request, response) => {
//   response.send( communication_management_controller.create_client_listener( request ) )
// })

//  === Exports ===
module.exports = communication_management_routes