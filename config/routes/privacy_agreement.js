//  === Requirements ===
const express = require('express')
const privacy_agreement_routes = express.Router()
const privacy_controller = require("../../app/controllers/privacy_management_controller")

//  === Routes ===
privacy_agreement_routes.get("/", (request, response) => {
    response.send( privacy_controller.index_agreement( request ) )
})
privacy_agreement_routes.post("/", (request, response) => {
    response.send( privacy_controller.create_agreement( request ) )
})
privacy_agreement_routes.get("/:id", (request, response) => {
    response.send( privacy_controller.show_agreement( request ) )
})
privacy_agreement_routes.put("/:id", (request, response) => {
    response.send( privacy_controller.update_agreement( request ) )
})
privacy_agreement_routes.delete("/:id", (request, response) => {
    response.send( privacy_controller.destroy_agreemeent( request ) )
})

privacy_agreement_routes.post("/create_event", (request, response) => {
    response.send( privacy_controller.listener_agreement_create_event( request ) )
})
privacy_agreement_routes.post("/attribute_value_change", (request, response) => {
    response.send( privacy_controller.listener_agreement_attribute_value_change( request ) )
})
privacy_agreement_routes.post("/state_change_event", (request, response) => {
    response.send( privacy_controller.listener_agreement_state_change_event( request ) )
})
privacy_agreement_routes.post("/delete_event", (request, response) => {
    response.send( privacy_controller.listener_agreement_delete_event( request ) )
})

//  === Exports ===
module.exports = privacy_agreement_routes