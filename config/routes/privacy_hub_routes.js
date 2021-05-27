//  === Requirements ===
const express = require('express')
const privacy_hub_routes = express.Router()
const privacy_controller = require("../../app/controllers/privacy_management_controller")
//  === Routes ===
privacy_hub_routes.post("/", (request, response) => {
    response.send( privacy_controller.create_hub( request ) )
})

privacy_hub_routes.delete("/:id", (request, response) => {
    response.send( privacy_controller.destroy_hub( request ) )
})

//  === Exports ===
module.exports = privacy_hub_routes