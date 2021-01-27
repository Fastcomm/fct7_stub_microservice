//  === Requirements ===
const express = require('express')
const application = express()
const logger = require("morgan")

//  === Middleware ===
application.use(logger('combined', { stream: require("./logs/log_helper")}))
application.use("/", require("./config/routes"))

//  === Engine Setup ===
application.listen(8080)

//  === Exports ===
module.exports = application;