//  === Requirements ===
const express = require('express')
const privacy_profile_specification_routes = express.Router()
const privacy_controller = require("../../app/controllers/privacy_management_controller")

privacy_profile_specification_routes.get("/", (request, response) => {
    response.send( privacy_controller.index_profile_specification( request ) )
})
privacy_profile_specification_routes.post("/", (request, response) => {
    response.send( privacy_controller.create_profile_specification( request ) )
})
privacy_profile_specification_routes.get("/:id", (request, response) => {
    response.send( privacy_controller.show_profile_specification( request ) )
})
privacy_profile_specification_routes.put("/:id", (request, response) => {
    response.send( privacy_controller.update_profile_specification( request ) )
})
privacy_profile_specification_routes.delete("/:id", (request, response) => {
    response.send( privacy_controller.destroy_profile_specification( request ) )
})


privacy_profile_specification_routes.post("/create_event", (request, response) => {
    response.send( privacy_controller.listener_specification_create_event( request ) )
})
privacy_profile_specification_routes.post("/attribute_value_change", (request, response) => {
    response.send( privacy_controller.listener_specification_attribute_value_change( request ) )
})
privacy_profile_specification_routes.post("/state_change_event", (request, response) => {
    response.send( privacy_controller.listener_specification_state_change_event( request ) )
})
privacy_profile_specification_routes.post("/delete_event", (request, response) => {
    response.send( privacy_controller.listener_specification_delete_event( request ) )
})


//  === Exports ===
module.exports = privacy_profile_specification_routes