//  === Requirements ===
const express = require('express')
const routes = express.Router()

//  === Controllers ===
routes.use("/", require("./routes/application"))

//  === Exports ===
module.exports = routes