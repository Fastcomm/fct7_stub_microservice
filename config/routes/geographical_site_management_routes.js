//  === Requirements ===
var express = require('express')
var geographical_site_management_routes = express.Router()
var geographical_site_management_controller = require("../../app/controllers/geographical_site_management_controller")

//  === Routes ===
geographical_site_management_routes.post('/', (request, response) => {
    response.send( geographical_site_management_controller.create(request) )
})
geographical_site_management_routes.get('/', (request, response) => {
    response.send( geographical_site_management_controller.index(request) )
})
geographical_site_management_routes.get('/:geographic_site_id', (request, response) => {
    response.send( geographical_site_management_controller.show(request) )
})
geographical_site_management_routes.put('/:geographic_site_id', (request, response) => {
    response.send( geographical_site_management_controller.put_update(request) )
})
geographical_site_management_routes.patch('/:geographic_site_id', (request, response) => {
    response.send( geographical_site_management_controller.patch_update(request) )
})
geographical_site_management_routes.delete('/:geographic_site_id', (request, response) => {
    response.send( geographical_site_management_controller.destroy(request) )
})

geographical_site_management_routes.post("/hub", (request, response) => {
    response.send( geographical_site_management_controller.create_hub( request ) )
})
geographical_site_management_routes.delete("/hub/:hub_id", (request, response) => {
    response.send( geographical_site_management_controller.destroy_hub( request ) )
})
geographical_site_management_routes.post("/client/listener", (request, response) => {
    response.send( geographical_site_management_controller.create_client_listener( request ) )
})


//  === Exports ===
module.exports = geographical_site_management_routes