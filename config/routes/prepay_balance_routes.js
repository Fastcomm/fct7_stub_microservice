//  === Requirements ===
const express = require('express')
const prepay_balance_controller = require('../../app/controllers/prepay_balance_controller')
const prepay_balance_routes = express.Router()

//  === Routes ===
prepay_balance_routes.get("/products/:product_id/buckets", (request, response) => {
    response.send( prepay_balance_controller.index_product_buckets( request ) )
})
prepay_balance_routes.get("/products/:product_id/buckets/:bucket_id", (request, response) => {
    response.send( prepay_balance_controller.show_product_buckets( request ) )
})
prepay_balance_routes.post("/products/:product_id/adjustments", (request, response) => {
    response.send( prepay_balance_controller.create_product_adjustments( request ) )
})
prepay_balance_routes.get("/products/:product_id/adjustments", (request, response) => {
    response.send( prepay_balance_controller.index_product_adjustments( request ) )
})
prepay_balance_routes.get("/products/:product_id/adjustments/:adjustment_id", (request, response) => {
    response.send( prepay_balance_controller.show_product_adjustments( request ) )
})
prepay_balance_routes.post("/products/:product_id/transfers", (request, response) => {
    response.send( prepay_balance_controller.create_product_transfers( request ) )
})
prepay_balance_routes.get("/products/:product_id/transfers", (request, response) => {
    response.send( prepay_balance_controller.index_product_transfers( request ) )
})
prepay_balance_routes.post("/products/:product_id/topups", (request, response) => {
    response.send( prepay_balance_controller.create_product_topups( request ) )
})
prepay_balance_routes.get("/products/:product_id/topups", (request, response) => {
    response.send( prepay_balance_controller.index_product_topups( request ) )
})
prepay_balance_routes.post("/products/:product_id/topups/:topup_id/status", (request, response) => {
    response.send( prepay_balance_controller.create_product_topups_status( request ) )
})
prepay_balance_routes.get("/products/:product_id/topups/:topup_id/status", (request, response) => {
    response.send( prepay_balance_controller.index_product_topups_status( request ) )
})
prepay_balance_routes.get("/buckets", (request, response) => {
    response.send( prepay_balance_controller.index_buckets( request ) )
})
prepay_balance_routes.get("/buckets/:bucket_id", (request, response) => {
    response.send( prepay_balance_controller.show_buckets( request ) )
})
prepay_balance_routes.get("/accumulated_balance", (request, response) => {
    response.send( prepay_balance_controller.index_accumulated_balance( request ) )
})
prepay_balance_routes.get("/accumulated_balance/products/:product_id", (request, response) => {
    response.send( prepay_balance_controller.show_accumulated_balance_products( request ) )
})
prepay_balance_routes.get("/activity", (request, response) => {
    response.send( prepay_balance_controller.index_activity( request ) )
})
prepay_balance_routes.get("/activity/products/:product_id", (request, response) => {
    response.send( prepay_balance_controller.show_activity_products( request ) )
})
prepay_balance_routes.post("/topups", (request, response) => {
    response.send( prepay_balance_controller.create_topups( request ) )
})
prepay_balance_routes.get("/topups", (request, response) => {
    response.send( prepay_balance_controller.index_topups( request ) )
})
prepay_balance_routes.get("/topups/:topup_id", (request, response) => {
    response.send( prepay_balance_controller.show_topups( request ) )
})
prepay_balance_routes.get("/topups/:topup_id/status", (request, response) => {
    response.send( prepay_balance_controller.index_topups_status( request ) )
})
prepay_balance_routes.put("/topups/:topup_id/status", (request, response) => {
    response.send( prepay_balance_controller.update_topups_status( request ) )
})
prepay_balance_routes.post("/transfers", (request, response) => {
    response.send( prepay_balance_controller.create_transfers( request ) )
})
prepay_balance_routes.get("/transfers", (request, response) => {
    response.send( prepay_balance_controller.index_transfers( request ) )
})
prepay_balance_routes.get("/transfers/:transfers_id", (request, response) => {
    response.send( prepay_balance_controller.show_transfers( request ) )
})
prepay_balance_routes.get("/transfers/:transfers_id/status", (request, response) => {
    response.send( prepay_balance_controller.index_transfers_status( request ) )
})
prepay_balance_routes.put("/transfers/:transfers_id/status", (request, response) => {
    response.send( prepay_balance_controller.update_transfers_status( request ) )
})
prepay_balance_routes.post("/adjustments", (request, response) => {
    response.send( prepay_balance_controller.create_adjustments( request ) )
})
prepay_balance_routes.get("/adjustments", (request, response) => {
    response.send( prepay_balance_controller.index_adjustments( request ) )
})
prepay_balance_routes.get("/adjustments/:adjustments_id", (request, response) => {
    response.send( prepay_balance_controller.show_adjustments( request ) )
})
prepay_balance_routes.post("/hub", (request, response) => {
    response.send( prepay_balance_controller.create_hub( request ) )
})
prepay_balance_routes.delete("/hub/:hub_id", (request, response) => {
    response.send( prepay_balance_controller.remove_hub( request ) )
})
prepay_balance_routes.post("/client/listener", (request, response) => {
    response.send( prepay_balance_controller.create_client_listener( request ) )
})
prepay_balance_routes.post("/reserve", (request, response) => {
    response.send( prepay_balance_controller.reserve( request ) )
})
prepay_balance_routes.post("/unreserve", (request, response) => {
    response.send( prepay_balance_controller.unreserve( request ) )
})
prepay_balance_routes.post("/deduct", (request, response) => {
    response.send( prepay_balance_controller.deduct( request ) )
})

//  === Exports ===
module.exports = prepay_balance_routes