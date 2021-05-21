//  === Requirements ===
const express = require('express')
const privacy_profile_routes = express.Router()
const privacy_controller = require("../../app/controllers/privacy_management_controller")

//  === Routes ===
privacy_profile_routes.post("/", (request, response) => {
    response.send( privacy_controller.create_profile( request ) )
})

privacy_profile_routes.get("/", (request, response) => {
    response.send( privacy_controller.index_profile( request ) )
})

privacy_profile_routes.get("/:id", (request, response) => {
    response.send( privacy_controller.show_profile( request ) )
})

privacy_profile_routes.put("/:id", (request, response) => {
    response.send( privacy_controller.update_profile( request ) )
})

privacy_profile_routes.delete("/:id", (request, response) => {
    response.send( privacy_controller.destroy_profile( request ) )
})

privacy_profile_routes.post("/create_event", (request, response) => {
    response.send( privacy_controller.listener_profile_create_event( request ) )
})
privacy_profile_routes.post("/attribute_value_change", (request, response) => {
    response.send( privacy_controller.listener_profile_attribute_value_change( request ) )
})
privacy_profile_routes.post("/state_change_event", (request, response) => {
    response.send( privacy_controller.listener_profile_state_change_event( request ) )
})
privacy_profile_routes.post("/delete_event", (request, response) => {
    response.send( privacy_controller.listener_profile_delete_event( request ) )
})


//  === Exports ===
module.exports = privacy_profile_routes