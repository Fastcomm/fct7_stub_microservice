//  === Requirements ===
const express = require('express')
const service_activation_and_configuration_routes = express.Router()
const service_activation_and_configuration_controller = require("../../app/controllers/service_activation_and_configuration_controller")

//  === Routes ===
service_activation_and_configuration_routes.get('/service', (request, response) => {
    response.send( service_activation_and_configuration_controller.index_service(request) )
})
service_activation_and_configuration_routes.post('/service', (request, response) => {
    response.send( service_activation_and_configuration_controller.create_service(request) )
})
service_activation_and_configuration_routes.get('/service/:id', (request, response) => {
    response.send( service_activation_and_configuration_controller.show_service(request) )
})
service_activation_and_configuration_routes.patch('/service/:id', (request, response) => {
    response.send( service_activation_and_configuration_controller.update_service(request) )
})
service_activation_and_configuration_routes.delete('/service/:id', (request, response) => {
    response.send( service_activation_and_configuration_controller.remove_service(request) )
})
service_activation_and_configuration_routes.get('/monitor', (request, response) => {
    response.send( service_activation_and_configuration_controller.index_monitor(request) )
})
service_activation_and_configuration_routes.get('/monitor/:id', (request, response) => {
    response.send( service_activation_and_configuration_controller.show_monitor(request) )
})
service_activation_and_configuration_routes.post('/listener/notification/monitor_create', (request, response) => {
    response.send( service_activation_and_configuration_controller.create_listener_notification_monitor_create(request) )
})
service_activation_and_configuration_routes.post('/listener/notification/monitor_attribute_change', (request, response) => {
    response.send( service_activation_and_configuration_controller.create_listener_notification_monitor_attribute_change(request) )
})
service_activation_and_configuration_routes.post('/listener/notification/monitor_state_change', (request, response) => {
    response.send( service_activation_and_configuration_controller.create_listener_notification_monitor_state_change(request) )
})
service_activation_and_configuration_routes.post('/listener/notification/monitor_delete', (request, response) => {
    response.send( service_activation_and_configuration_controller.create_listener_notification_monitor_delete(request) )
})
service_activation_and_configuration_routes.post('/listener/notification/service_create', (request, response) => {
    response.send( service_activation_and_configuration_controller.create_listener_notification_service_create(request) )
})
service_activation_and_configuration_routes.post('/listener/notification/service_attribute_change', (request, response) => {
    response.send( service_activation_and_configuration_controller.create_listener_notification_service_attribute_change(request) )
})
service_activation_and_configuration_routes.post('/listener/notification/service_state_change', (request, response) => {
    response.send( service_activation_and_configuration_controller.create_listener_notification_service_state_change(request) )
})
service_activation_and_configuration_routes.post('/listener/notification/service_delete', (request, response) => {
    response.send( service_activation_and_configuration_controller.create_listener_notification_service_delete(request) )
})
service_activation_and_configuration_routes.post('/hub', (request, response) => {
    response.send( service_activation_and_configuration_controller.create_hub(request) )
})
service_activation_and_configuration_routes.delete('/hub/:id', (request, response) => {
    response.send( service_activation_and_configuration_controller.remove_hub(request) )
})
service_activation_and_configuration_routes.post("/client/listener", (request, response) => {
    response.send( service_activation_and_configuration_controller.create_client_listener( request ) )
})





//  === Exports ===
module.exports = service_activation_and_configuration_routes