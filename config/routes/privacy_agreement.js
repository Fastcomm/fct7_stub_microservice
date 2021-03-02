//  === Requirements ===
const express = require('express')
const privacy_agreement_routes = express.Router()
const privacy_controller = require("../../app/controllers/privacy_management_controller")

//  === Routes ===
privacy_agreement_routes.post("/", (request, response) => {
    response.send()
})

privacy_agreement_routes.get("/:id", (request, response) => {
    response.send()
})

privacy_agreement_routes.put("/:id", (request, response) => {
    response.send()
})

privacy_agreement_routes.delete("/:id", (request, response) => {
    response.send()
})

//  === Exports ===
module.exports = privacy_agreement_routes