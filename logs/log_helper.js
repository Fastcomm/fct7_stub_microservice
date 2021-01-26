//  === Requirements ===
var fs = require('fs')
var path = require('path')
 
// create a write stream (in append mode)
var log_helper = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

module.exports = log_helper