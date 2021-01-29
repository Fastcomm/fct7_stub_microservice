//  === Requirements ===
const express = require('express')
const routes = express.Router()

//  === Controllers ===
routes.use("/", require("./routes/application_routes"))
routes.use("/bill", require("./routes/bill_routes"))
routes.use("/bill_on_demand", require("./routes/bill_on_demand_routes"))
routes.use("/bill_rate", require("./routes/bill_rate_routes"))
routes.use("/bill_hub", require("./routes/bill_hub_routes"))
routes.use("/product_ordering", require("./routes/product_ordering_routes"))
routes.use("/quotes", require("./routes/quote_routes"))
routes.use("/usage_consumption", require("./routes/usage_consumption_routes"))
routes.use("/usage_consumption_request", require("./routes/usage_consumption_request_routes"))
routes.use("/usage_consumption_hub", require("./routes/usage_consumption_hub_routes"))
routes.use("/usage", require("./routes/usage_routes"))
routes.use("/usage_specification", require("./routes/usage_specification_routes"))
routes.use("/usage_hub", require("./routes/usage_hub_routes"))

//  === Exports ===
module.exports = routes