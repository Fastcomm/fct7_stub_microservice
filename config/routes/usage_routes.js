//  === Requirements ===
const express = require('express')
const usage_routes = express.Router()
const usage_management_controller = require("../../app/controllers/usage_management_controller")

//  === Routes ===
usage_routes.post("/", (request, response) => {
    response.send( usage_management_controller.create( request ) )
})

usage_routes.get("/:id", (request, response) => {
    response.send( usage_management_controller.show( request ) )
})

usage_routes.get("/", (request, response) => {
    response.send( usage_management_controller.index( request ) )
})

usage_routes.put("/:id", (request, response) => {
    response.send( usage_management_controller.update( request ) )
})

usage_routes.delete("/:id", (request, response) => {
    response.send( usage_management_controller.destroy( request ) )
})

usage_routes.post("/listener_create_event", (request, response) => {
    response.send( usage_management_controller.listener_usage_create_event( request ) )
})
usage_routes.post("/listener_attribute_value_change", (request, response) => {
    response.send( usage_management_controller.listener_usage_attribute_value_change( request ) )
})
usage_routes.post("/listener_delete_event", (request, response) => {
    response.send( usage_management_controller.listener_usage_delete_event( request ) )
})
usage_routes.post("/listener_state_change_event", (request, response) => {
    response.send( usage_management_controller.listener_usage_state_change_event( request ) )
})

//  === Exports ===
module.exports = usage_routes