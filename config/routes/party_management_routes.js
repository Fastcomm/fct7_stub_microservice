//  === Requirements ===
var express = require('express')
var party_management_routes = express.Router()
var party_management_controller = require("../../app/controllers/party_management_controller")

//  === Routes ===
party_management_routes.post('/individual', (request, response) => {
    response.send( party_management_controller.create_individual(request) )
})
party_management_routes.get('/individual', (request, response) => {
    response.send( party_management_controller.index_individual(request) )
})
party_management_routes.get('/individual/:individual_id', (request, response) => {
    response.send( party_management_controller.show_individual(request) )
})
party_management_routes.put('/individual/:individual_id', (request, response) => {
    response.send( party_management_controller.put_update_individual(request) )
})
party_management_routes.patch('/individual/:individual_id', (request, response) => {
    response.send( party_management_controller.patch_update_individual(request) )
})
party_management_routes.delete('/individual/:individual_id', (request, response) => {
    response.send( party_management_controller.destroy_individual(request) )
})

party_management_routes.post('/organization', (request, response) => {
    response.send( party_management_controller.create_organization(request) )
})
party_management_routes.get('/organization', (request, response) => {
    response.send( party_management_controller.index_organization(request) )
})
party_management_routes.get('/organization/:organization_id', (request, response) => {
    response.send( party_management_controller.show_organization(request) )
})
party_management_routes.put('/organization/:organization_id', (request, response) => {
    response.send( party_management_controller.put_update_organization(request) )
})
party_management_routes.patch('/organization/:organization_id', (request, response) => {
    response.send( party_management_controller.patch_update_organization(request) )
})
party_management_routes.delete('/organization/:organization_id', (request, response) => {
    response.send( party_management_controller.destroy_organization(request) )
})

party_management_routes.post("/hub", (request, response) => {
    response.send( party_management_controller.create_hub( request ) )
})
party_management_routes.delete("/hub/:hub_id", (request, response) => {
    response.send( party_management_controller.destroy_hub( request ) )
})


//  === Exports ===
module.exports = party_management_routes