//  === Requirements ===
var express = require('express')
var account_management_routes = express.Router()
var account_management_controller = require("../../app/controllers/account_management_controller")

//  === Routes ===
account_management_routes.get('/partyAccount', (request, response) => {
  response.send( account_management_controller.index_party(request) )
})
account_management_routes.post('/partyAccount', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.get('/partyAccount/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.patch('/partyAccount/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.delete('/partyAccount/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})

account_management_routes.get('/billingAccount', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.post('/billingAccount', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.get('/billingAccount/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.patch('/billingAccount/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.delete('/billingAccount/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})

account_management_routes.get('/settlementAccount', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.post('/settlementAccount', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.get('/settlementAccount/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.patch('/settlementAccount/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.delete('/settlementAccount/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})

account_management_routes.get('/financialAccount', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.post('/financialAccount', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.get('/financialAccount/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.patch('/financialAccount/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.delete('/financialAccount/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})

account_management_routes.get('/billingCycleSpecification', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.post('/billingCycleSpecification', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.get('/billingCycleSpecification/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.patch('/billingCycleSpecification/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.delete('/billingCycleSpecification/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})

account_management_routes.get('/billFormat', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.post('/billFormat', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.get('/billFormat/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.patch('/billFormat/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.delete('/billFormat/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})

account_management_routes.get('/billPresentationMedia', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.post('/billPresentationMedia', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.get('/billPresentationMedia/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.patch('/billPresentationMedia/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.delete('/billPresentationMedia/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})

account_management_routes.post('/hub', (request, response) => {
  response.send( account_management_controller.index(request) )
})
account_management_routes.delete('/hub/:id', (request, response) => {
  response.send( account_management_controller.index(request) )
})

//  === Exports ===
module.exports = account_management_routes