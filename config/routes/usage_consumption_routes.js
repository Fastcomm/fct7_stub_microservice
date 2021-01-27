//  === Requirements ===
var express = require('express')
var usage_consumption_routes = express.Router()
var usage_consumption_controller = require("../../app/controllers/usage_consumption_controller")

//  === Routes ===
usage_consumption_routes.get("/:id", (request, response) => {
    response.json( usage_consumption_controller.show(request) )
})

usage_consumption_routes.get("/", (request, response) => {
    response.send( usage_consumption_controller.index(request) )
})

usage_consumption_routes.delete("/:id", (request, response) => {
    response.send( usage_consumption_controller.destroy(request) )
})

//  === Exports ===
module.exports = usage_consumption_routes