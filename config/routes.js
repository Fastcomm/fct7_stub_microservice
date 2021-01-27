//  === Requirements ===
const express = require('express')
const routes = express.Router()

//  === Controllers ===
routes.use("/", require("./routes/application_routes"))
routes.use("/usage_consumption", require("./routes/usage_consumption_routes"))
routes.use("/usage_consumption_request", require("./routes/usage_consumption_request_routes"))
routes.use("/usage_consumption_hub", require("./routes/usage_consumption_hub_routes"))
routes.use("/usage", require("./routes/usage_routes"))
routes.use("/usage_specification", require("./routes/usage_specification_routes"))
routes.use("/usage_hub", require("./routes/usage_hub_routes"))

//  === Exports ===
module.exports = routes