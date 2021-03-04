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

//  === Exports ===
module.exports = permissions_routes