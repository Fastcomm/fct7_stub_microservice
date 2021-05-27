//  === Requirements ===
var express = require('express')
var recommendation_management_routes = express.Router()
var recommendation_management_controller = require("../../app/controllers/recommendation_management_controller")

//  === Routes ===
recommendation_management_routes.post("/", (request, response) => {
    response.send( recommendation_management_controller.create( request ) )
})
recommendation_management_routes.get('/', (request, response) => {
    response.send( recommendation_management_controller.index(request) )
})
recommendation_management_routes.get('/:id', (request, response) => {
    response.send( recommendation_management_controller.show(request) )
})

recommendation_management_routes.post("/hub", (request, response) => {
    response.send( recommendation_management_controller.create_hub( request ) )
})
recommendation_management_routes.delete("/hub/:id", (request, response) => {
    response.send( recommendation_management_controller.destroy_hub( request ) )
})

recommendation_management_routes.post("/client/listener_create_event", (request, response) => {
    response.send( recommendation_management_controller.create_listener_create_event( request ) )
})
recommendation_management_routes.post("/client/listener_state_change_event", (request, response) => {
    response.send( recommendation_management_controller.create_listener_state_change_event( request ) )
})


//  === Exports ===
module.exports = recommendation_management_routes