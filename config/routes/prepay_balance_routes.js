//  === Requirements ===
const express = require('express')
const prepay_balance_controller = require('../../app/controllers/prepay_balance_controller')
const prepay_balance_routes = express.Router()

//  === Routes ===
prepay_balance_routes.get("/buckets", (request, response) => {
    response.send( prepay_balance_controller.index_buckets( request ) )
})
prepay_balance_routes.get("/buckets/:bucket_id", (request, response) => {
    response.send( prepay_balance_controller.show_buckets( request ) )
})

prepay_balance_routes.get("/topups", (request, response) => {
    response.send( prepay_balance_controller.index_topups( request ) )
})
prepay_balance_routes.post("/topups", (request, response) => {
    response.send( prepay_balance_controller.create_topups( request ) )
})
prepay_balance_routes.patch("/topups/:topup_id", (request, response) => {
    response.send( prepay_balance_controller.update_topups( request ) )
})
prepay_balance_routes.get("/topups/:topup_id", (request, response) => {
    response.send( prepay_balance_controller.show_topups( request ) )
})
prepay_balance_routes.delete("/topups/:topup_id", (request, response) => {
    response.send( prepay_balance_controller.destroy_topups( request ) )
})


prepay_balance_routes.post("/adjustments", (request, response) => {
    response.send( prepay_balance_controller.create_adjustments( request ) )
})
prepay_balance_routes.get("/adjustments", (request, response) => {
    response.send( prepay_balance_controller.index_adjustments( request ) )
})
prepay_balance_routes.patch("/adjustments/:adjustments_id", (request, response) => {
    response.send( prepay_balance_controller.update_adjustments( request ) )
})
prepay_balance_routes.get("/adjustments/:adjustments_id", (request, response) => {
    response.send( prepay_balance_controller.show_adjustments( request ) )
})
prepay_balance_routes.delete("/adjustments/:adjustments_id", (request, response) => {
    response.send( prepay_balance_controller.destroy_adjustments( request ) )
})



prepay_balance_routes.post("/transfers", (request, response) => {
    response.send( prepay_balance_controller.create_transfers( request ) )
})
prepay_balance_routes.get("/transfers", (request, response) => {
    response.send( prepay_balance_controller.index_transfers( request ) )
})
prepay_balance_routes.patch("/transfers/:transfers_id", (request, response) => {
    response.send( prepay_balance_controller.update_transfers( request ) )
})
prepay_balance_routes.get("/transfers/:transfers_id", (request, response) => {
    response.send( prepay_balance_controller.show_transfers( request ) )
})
prepay_balance_routes.delete("/transfers/:transfers_id", (request, response) => {
    response.send( prepay_balance_controller.destroy_transfers( request ) )
})


prepay_balance_routes.post("/reserve", (request, response) => {
    response.send( prepay_balance_controller.create_reserve( request ) )
})
prepay_balance_routes.get("/reserve", (request, response) => {
    response.send( prepay_balance_controller.index_reserve( request ) )
})
prepay_balance_routes.patch("/reserve/:reserve_id", (request, response) => {
    response.send( prepay_balance_controller.update_reserve( request ) )
})
prepay_balance_routes.get("/reserve/:reserve_id", (request, response) => {
    response.send( prepay_balance_controller.show_reserve( request ) )
})
prepay_balance_routes.delete("/reserve/:reserve_id", (request, response) => {
    response.send( prepay_balance_controller.destroy_reserve( request ) )
})



prepay_balance_routes.get("/accumulated_balance", (request, response) => {
    response.send( prepay_balance_controller.index_accumulated_balance( request ) )
})
prepay_balance_routes.get("/accumulated_balance/products/:product_id", (request, response) => {
    response.send( prepay_balance_controller.show_accumulated_balance( request ) )
})


prepay_balance_routes.get("/action_history", (request, response) => {
    response.send( prepay_balance_controller.index_action_history( request ) )
})
prepay_balance_routes.get("/action_history/:product_id", (request, response) => {
    response.send( prepay_balance_controller.show_action_history( request ) )
})



prepay_balance_routes.post("/listener/topup_create_event", (request, response) => {
    response.send( prepay_balance_controller.create_listener_topup_create_event( request ) )
})
prepay_balance_routes.post("/listener/topup_cancel_event", (request, response) => {
    response.send( prepay_balance_controller.create_listener_topup_cancel_event( request ) )
})
prepay_balance_routes.post("/listener/topup_failure_event", (request, response) => {
    response.send( prepay_balance_controller.create_listener_topup_failure_event( request ) )
})

prepay_balance_routes.post("/listener/adjust_create_event", (request, response) => {
    response.send( prepay_balance_controller.create_listener_adjust_create_event( request ) )
})
prepay_balance_routes.post("/listener/adjust_cancel_event", (request, response) => {
    response.send( prepay_balance_controller.create_listener_adjust_cancel_event( request ) )
})
prepay_balance_routes.post("/listener/adjust_failure_event", (request, response) => {
    response.send( prepay_balance_controller.create_listener_adjust_failure_event( request ) )
})

prepay_balance_routes.post("/listener/transfer_create_event", (request, response) => {
    response.send( prepay_balance_controller.create_listener_transfer_create_event( request ) )
})
prepay_balance_routes.post("/listener/transfer_cancel_event", (request, response) => {
    response.send( prepay_balance_controller.create_listener_transfer_cancel_event( request ) )
})
prepay_balance_routes.post("/listener/transfer_failure_event", (request, response) => {
    response.send( prepay_balance_controller.create_listener_transfer_failure_event( request ) )
})

prepay_balance_routes.post("/listener/reserve_create_event", (request, response) => {
    response.send( prepay_balance_controller.create_listener_reserve_create_event( request ) )
})
prepay_balance_routes.post("/listener/reserve_cancel_event", (request, response) => {
    response.send( prepay_balance_controller.create_listener_reserve_cancel_event( request ) )
})
prepay_balance_routes.post("/listener/reserve_failure_event", (request, response) => {
    response.send( prepay_balance_controller.create_listener_reserve_failure_event( request ) )
})



prepay_balance_routes.post("/hub", (request, response) => {
    response.send( prepay_balance_controller.create_hub( request ) )
})
prepay_balance_routes.delete("/hub/:hub_id", (request, response) => {
    response.send( prepay_balance_controller.destroy_hub( request ) )
})

//  === Exports ===
module.exports = prepay_balance_routes