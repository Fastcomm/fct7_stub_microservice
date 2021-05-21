//  === Requirements ===
const express = require('express')
const usage_specification_routes = express.Router()
const usage_management_controller = require("../../app/controllers/usage_management_controller")

//  === Routes ===
usage_specification_routes.get("/", (request, response) => {
    response.send( usage_management_controller.index_specification( request ) )
})
usage_specification_routes.post("/", (request, response) => {
    response.send( usage_management_controller.create_specification( request ) )
})

usage_specification_routes.get("/:id", (request, response) => {
    response.send( usage_management_controller.show_specification( request ) )
})
usage_specification_routes.patch('/:id', (request, response) => {
    response.send( usage_management_controller.update_specification(request) )
})

usage_specification_routes.delete("/:id", (request, response) => {
    response.send( usage_management_controller.destroy_specification( request ) )
})

//  === Exports ===
module.exports = usage_specification_routes