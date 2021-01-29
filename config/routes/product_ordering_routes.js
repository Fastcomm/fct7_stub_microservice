//  === Requirements ===
const express = require('express')
const product_ordering_routes = express.Router()
const product_ordering_controller = require("../../app/controllers/product_ordering_controller")

//  === Routes ===
product_ordering_routes.post("/", (request, response) => {
    response.send( product_ordering_controller.create( request ) )
})

product_ordering_routes.get("/:id", (request, response) => {
    response.send( product_ordering_controller.show( request ) ) 
})

product_ordering_routes.get("/", (request, response) => {
    response.send( product_ordering_controller.index( request ) )
})

product_ordering_routes.put("/:id", (request, response) => {
    response.send( product_ordering_controller.update( request ) )
})

product_ordering_routes.delete("/:id", (request, response) => {
    response.send( product_ordering_controller.destroy( request ) )
})

//  === Exports ===
module.exports = product_ordering_routes