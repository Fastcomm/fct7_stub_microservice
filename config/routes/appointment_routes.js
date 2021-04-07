//  === Requirements ===
var express = require('express')
var appointment_routes = express.Router()
var appointment_controller = require("../../app/controllers/appointment_controller")

//  === Routes ===
appointment_routes.post('/', (request, response) => {
    response.send( appointment_controller.create(request) )
})
appointment_routes.get('/', (request, response) => {
    response.send( appointment_controller.index(request) )
})
appointment_routes.get('/time_slot', (request, response) => {
    response.send( appointment_controller.index_time_slot(request) )
})
appointment_routes.get('/:id', (request, response) => {
    response.send( appointment_controller.show(request) )
})
appointment_routes.patch('/:id', (request, response) => {
    response.send( appointment_controller.update(request) )
})
appointment_routes.delete('/:id', (request, response) => {
    response.send( appointment_controller.destroy(request) )
})

appointment_routes.post('/time_slot', (request, response) => {
    response.send( appointment_controller.create_time_slot(request) )
})

appointment_routes.get('/time_slot/:slot_id', (request, response) => {
    response.send( appointment_controller.show_time_slot(request) )
})
appointment_routes.patch('/time_slot/:slot_id', (request, response) => {
    response.send( appointment_controller.update_time_slot(request) )
})
appointment_routes.delete('/time_slot/:slot_id', (request, response) => {
    response.send( appointment_controller.destroy_time_slot(request) )
})

appointment_routes.post("/hub", (request, response) => {
    response.send( appointment_controller.create_hub( request ) )
})
appointment_routes.delete("/hub/:hub_id", (request, response) => {
    response.send( appointment_controller.destroy_hub( request ) )
})

//  === Exports ===
module.exports = appointment_routes