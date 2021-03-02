//  === Requirements ===
const express = require('express')
const privacy_profile_routes = express.Router()
const privacy_controller = require("../../app/controllers/privacy_management_controller")

//  === Routes ===
privacy_profile_routes.post("/", (request, response) => {
    response.send()
})

privacy_profile_routes.get("/", (request, response) => {
    response.send()
})

privacy_profile_routes.get("/:id", (request, response) => {
    response.send()
})

privacy_profile_routes.put("/:id", (request, response) => {
    response.send()
})

privacy_profile_routes.delete("/:id", (request, response) => {
    response.send()
})

//  === Exports ===
module.exports = privacy_profile_routes