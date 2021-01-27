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

//  === Exports ===
module.exports = usage_routes