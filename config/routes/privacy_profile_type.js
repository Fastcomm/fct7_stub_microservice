//  === Requirements ===
const express = require('express')
const privacy_profile_type_routes = express.Router()
const privacy_controller = require("../../app/controllers/privacy_management_controller")

//  === Routes ===
privacy_profile_type_routes.post("/", (request, response) => {
    response.send()
})

privacy_profile_type_routes.get("/:id", (request, response) => {
    response.send()
})

privacy_profile_type_routes.put("/:id", (request, response) => {
    response.send()
})

privacy_profile_type_routes.delete("/:id", (request, response) => {
    response.send()
})


//  === Exports ===
module.exports = privacy_profile_type_routes