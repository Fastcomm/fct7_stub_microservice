//  === Requirements ===
var express = require('express');
var application = express();

//  === Router ===
application.use("/", require("./config/routes"))

//  === Engine Setup ===
application.listen(8080)

/*
//  === Engine Setup ===
var cookieParser = require('cookie-parser');
var logger = require('morgan');
application.set('views', path.join(__dirname, 'views'));
application.set('view engine', 'pug');

application.use(logger('dev'));
application.use(express.json());
application.use(express.urlencoded({ extended: false }));
application.use(cookieParser());
application.use(express.static(path.join(__dirname, 'public')));
var createError = require('http-errors');
var path = require('path');
// catch 404 and forward to error handler
application.use(function(req, res, next) {
  next(createError(404));
});

// error handler
application.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.application.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/
//  === Exports ===
module.exports = application;