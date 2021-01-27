//  === Requirements ===
const express = require('express')
const usage_consumption_hub_routes = express.Router()
const usage_consumption_controller = require("../../app/controllers/usage_consumption_controller")

//  === Routes ===
usage_consumption_hub_routes.post("/", (request, response) => {
    response.send( usage_consumption_controller.create_hub( request ) )
})

usage_consumption_hub_routes.delete("/:id", (request, response) => {
    response.send( usage_consumption_controller.destroy_hub( request ) )
})

//  === Exports ===
module.exports = usage_consumption_hub_routes