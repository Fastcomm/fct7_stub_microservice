//  === Requirements ===
const express = require('express')
const roles_and_permissions_hub_routes = express.Router()
const roles_and_permissiosn_controller = require("../../app/controllers/roles_and_permissions_controller")


//  === Routes ===
roles_and_permissions_hub_routes.post("/", (request, response) => {
    response.send( roles_and_permissiosn_controller.create_hub( request ) )
})

roles_and_permissions_hub_routes.delete("/:id", (request, response) => {
    response.send( roles_and_permissiosn_controller.destroy_hub( request ) )
})

//  === Exports ===
module.exports = roles_and_permissions_hub_routes