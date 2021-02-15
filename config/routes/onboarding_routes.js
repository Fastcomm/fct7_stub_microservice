//  === Requirements ====
const express = require('express')
const onboarding_routes = express.Router()
const onboarding_controller = require("../../app/controllers/onboarding_controller")

//  === Routes ===
onboarding_routes.get("/", (request, response) => {
    response.send( onboarding_controller.index( request ) )
})

onboarding_routes.get("/:id", (request, response) => {
    response.send( onboarding_controller.show( request ) )
})

onboarding_routes.post("/", (request, response) => {
    response.send( onboarding_controller.create( request ) )
})

onboarding_routes.put("/:id", (request, response) => {
    response.send( onboarding_controller.update( request ) )
})

onboarding_routes.delete("/:id", (request, response) => {
    response.send( onboarding_controller.delete( request ) )
})

//  === Exports ===
module.exports = onboarding_routes