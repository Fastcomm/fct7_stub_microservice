//  === Requirements ===
var express = require('express')
var account_management_routes = express.Router()
var account_management_controller = require("../../app/controllers/account_management_controller")

//  === Routes ===
account_management_routes.get('/billing/cycle_specification', (request, response) => {
  response.send( account_management_controller.index_billing_cycle_specification(request) )
})

account_management_routes.get('/party', (request, response) => {
  response.send( account_management_controller.index_party(request) )
})
account_management_routes.post('/party', (request, response) => {
  response.send( account_management_controller.create_party(request) )
})
account_management_routes.get('/party/:id', (request, response) => {
  response.send( account_management_controller.show_party(request) )
})
account_management_routes.patch('/party/:id', (request, response) => {
  response.send( account_management_controller.update_party(request) )
})
account_management_routes.delete('/party/:id', (request, response) => {
  response.send( account_management_controller.destroy_party(request) )
})

account_management_routes.get('/billing', (request, response) => {
  response.send( account_management_controller.index_billing(request) )
})
account_management_routes.post('/billing', (request, response) => {
  response.send( account_management_controller.create_billing(request) )
})
account_management_routes.get('/billing/:id', (request, response) => {
  response.send( account_management_controller.show_billing(request) )
})
account_management_routes.patch('/billing/:id', (request, response) => {
  response.send( account_management_controller.update_billing(request) )
})
account_management_routes.delete('/billing/:id', (request, response) => {
  response.send( account_management_controller.destroy_billing(request) )
})

account_management_routes.get('/settlement', (request, response) => {
  response.send( account_management_controller.index_settlement(request) )
})
account_management_routes.post('/settlement', (request, response) => {
  response.send( account_management_controller.create_settlement(request) )
})
account_management_routes.get('/settlement/:id', (request, response) => {
  response.send( account_management_controller.show_settlement(request) )
})
account_management_routes.patch('/settlement/:id', (request, response) => {
  response.send( account_management_controller.update_settlement(request) )
})
account_management_routes.delete('/settlement/:id', (request, response) => {
  response.send( account_management_controller.destroy_settlement(request) )
})

account_management_routes.get('/financial', (request, response) => {
  response.send( account_management_controller.index_financial(request) )
})
account_management_routes.post('/financial', (request, response) => {
  response.send( account_management_controller.create_financial(request) )
})
account_management_routes.get('/financial/:id', (request, response) => {
  response.send( account_management_controller.show_financial(request) )
})
account_management_routes.patch('/financial/:id', (request, response) => {
  response.send( account_management_controller.update_financial(request) )
})
account_management_routes.delete('/financial/:id', (request, response) => {
  response.send( account_management_controller.destroy_financial(request) )
})


account_management_routes.post('/billing/cycle_specification', (request, response) => {
  response.send( account_management_controller.create_billing_cycle_specification(request) )
})
account_management_routes.get('/billing/cycle_specification/:id', (request, response) => {
  response.send( account_management_controller.show_billing_cycle_specification(request) )
})
account_management_routes.patch('/billing/cycle_specification/:id', (request, response) => {
  response.send( account_management_controller.update_billing_cycle_specification(request) )
})
account_management_routes.delete('/billing/cycle_specification/:id', (request, response) => {
  response.send( account_management_controller.destroy_billing_cycle_specification(request) )
})

account_management_routes.get('/bill/format', (request, response) => {
  response.send( account_management_controller.index_bill_format(request) )
})
account_management_routes.post('/bill/format', (request, response) => {
  response.send( account_management_controller.create_bill_format(request) )
})
account_management_routes.get('/bill/format/:id', (request, response) => {
  response.send( account_management_controller.show_bill_format(request) )
})
account_management_routes.patch('/bill/format/:id', (request, response) => {
  response.send( account_management_controller.update_bill_format(request) )
})
account_management_routes.delete('/bill/format/:id', (request, response) => {
  response.send( account_management_controller.destroy_bill_format(request) )
})

account_management_routes.get('/bill/media', (request, response) => {
  response.send( account_management_controller.index_bill_media(request) )
})
account_management_routes.post('/bill/media', (request, response) => {
  response.send( account_management_controller.create_bill_media(request) )
})
account_management_routes.get('/bill/media/:id', (request, response) => {
  response.send( account_management_controller.show_bill_media(request) )
})
account_management_routes.patch('/bill/media/:id', (request, response) => {
  response.send( account_management_controller.update_bill_media(request) )
})
account_management_routes.delete('/bill/media/:id', (request, response) => {
  response.send( account_management_controller.destroy_bill_media(request) )
})

account_management_routes.post('/listener/party/acc_attribute_value_change_event', (request, response) => {
  response.send( account_management_controller.create_listeners_party_acc_attribute_value_change_event(request) )
})
account_management_routes.post('/listener/party/acc_state_change_event', (request, response) => {
  response.send( account_management_controller.create_listeners_party_acc_state_change_event(request) )
})
account_management_routes.post('/listener/billing/acc_attribute_value_change_event', (request, response) => {
  response.send( account_management_controller.create_listeners_billing_acc_attribute_value_change_event(request) )
})
account_management_routes.post('/listener/billing/acc_state_change_event', (request, response) => {
  response.send( account_management_controller.create_listeners_billing_acc_state_change_event(request) )
})
account_management_routes.post('/listener/settlement/acc_attribute_value_change_event', (request, response) => {
  response.send( account_management_controller.create_listeners_settlement_acc_attribute_value_change_event(request) )
})
account_management_routes.post('/listener/settlement/acc_state_change_event', (request, response) => {
  response.send( account_management_controller.create_listeners_settlement_acc_state_change_event(request) )
})
account_management_routes.post('/listener/financial/acc_create_event', (request, response) => {
  response.send( account_management_controller.create_listeners_financial_acc_create_event(request) )
})
account_management_routes.post('/listener/financial/acc_attribute_value_change_event', (request, response) => {
  response.send( account_management_controller.create_listeners_financial_acc_attribute_value_change_event(request) )
})
account_management_routes.post('/listener/financial/acc_state_change_event', (request, response) => {
  response.send( account_management_controller.create_listeners_financial_acc_state_change_event(request) )
})
account_management_routes.post('/listener/financial/acc_delete_event', (request, response) => {
  response.send( account_management_controller.create_listeners_financial_acc_delete_event(request) )
})

account_management_routes.post('/hub', (request, response) => {
  response.send( account_management_controller.create_hub(request) )
})
account_management_routes.delete('/hub/:id', (request, response) => {
  response.send( account_management_controller.destroy_hub(request) )
})

//  === Exports ===
module.exports = account_management_routes