//  === Requirements ===
const express = require('express')
const usage_hub_routes = express.Router()
const usage_management_controller = require("../../app/controllers/usage_management_controller")

//  === Routes ===
usage_hub_routes.post("/", (request, response) => {
    response.send( usage_management_controller.create_hub( request ) )
})

usage_hub_routes.get("/:id", (request, response) => {
    response.send( usage_management_controller.show_hub( request ) )
})

usage_hub_routes.get("/", (request, response) => {
    response.send( usage_management_controller.index_hub( request ) )
})

usage_hub_routes.delete("/:id", (request, response) => {
    response.send( usage_management_controller.destroy_hub( request ) )
})

//  === Exports ===
module.exports = usage_hub_routes