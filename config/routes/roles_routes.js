//  === Requirements ===
const express = require('express')
const roles_routes = express.Router()
const roles_and_permissions_controller = require("../../app/controllers/roles_and_permissions_controller")

//  === Routes ===
roles_routes.post("/", (request, response) => {
    response.send( roles_and_permissions_controller.create_role( request ) )
})

roles_routes.get("/", (request, response) => {
    response.send( roles_and_permissions_controller.index_roles( request ) )
})

roles_routes.get("/:id", (request, response) => {
    response.send( roles_and_permissions_controller.show_role( request ) )
})
roles_routes.patch("/:id", (request, response) => {
    response.send( roles_and_permissions_controller.update_role( request ) )
})



roles_routes.post("/create_event", (request, response) => {
    response.send( roles_and_permissions_controller.listener_roles_create_event( request ) )
})
roles_routes.post("/attribute_value_change", (request, response) => {
    response.send( roles_and_permissions_controller.listener_roles_attribute_value_change( request ) )
})
roles_routes.post("/roles_state_change_event", (request, response) => {
    response.send( roles_and_permissions_controller.listener_roles_state_change_event( request ) )
})
roles_routes.post("/roles_delete_event", (request, response) => {
    response.send( roles_and_permissions_controller.listener_roles_state_change_event( request ) )
})


//  === Exports ===
module.exports = roles_routes