//  === Requirements ===
const express = require('express')
const permissions_routes = express.Router()
const roles_and_permissiosn_controller = require("../../app/controllers/roles_and_permissions_controller")

//  === Routes ===
permissions_routes.post("/", (request, response) => {
    response.send( roles_and_permissiosn_controller.create_permission( request ) )
})

permissions_routes.get("/", (request, response) => {
    response.send( roles_and_permissiosn_controller.index_permissions( request ) )
})

permissions_routes.get("/:id", (request, response) => {
    response.send( roles_and_permissiosn_controller.show_permission( request ) )
})
permissions_routes.patch("/:id", (request, response) => {
    response.send( roles_and_permissiosn_controller.update_permission( request ) )
})

permissions_routes.post("/create_event", (request, response) => {
    response.send( roles_and_permissiosn_controller.listener_permission_create_event( request ) )
})
permissions_routes.post("/attribute_value_change", (request, response) => {
    response.send( roles_and_permissiosn_controller.listener_permission_attribute_value_change( request ) )
})
permissions_routes.post("/state_change_event", (request, response) => {
    response.send( roles_and_permissiosn_controller.listener_permission_state_change_event( request ) )
})
permissions_routes.post("/delete_Event", (request, response) => {
    response.send( roles_and_permissiosn_controller.listener_permission_delete_event( request ) )
})

//  === Exports ===
module.exports = permissions_routes