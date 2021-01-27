//  === Requirements ===
var express = require('express')
var usage_consumption_request_routes = express.Router()
var usage_consumption_controller = require("../../app/controllers/usage_consumption_controller")

//  === Routes ===

usage_consumption_request_routes.post("/", (request, response) => {
    response.send( usage_consumption_controller.create_request(request) )
})

usage_consumption_request_routes.get("/:id", (request, response) => {
    response.send( usage_consumption_controller.show_request(request) )
})

usage_consumption_request_routes.get("/", (request, response) => {
    response.send( usage_consumption_controller.index_requests(request) )
})

usage_consumption_request_routes.delete("/:id", (request, response) => {
    response.send( usage_consumption_controller.destroy_request(request) )
})

//  === Exports ===
module.exports = usage_consumption_request_routes