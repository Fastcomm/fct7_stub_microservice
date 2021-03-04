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

//  === Exports ===
module.exports = roles_routes