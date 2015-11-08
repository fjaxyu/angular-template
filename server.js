//==============================================================================

var express, fs, bodyParser, request, logger, _, server, app, favicon, passport, LocalStrategy, cookieParser;

express = require('express');
fs = require('fs');
bodyParser = require('body-parser');
request = require('request');
logger = require('morgan');
_ = require('lodash');
favicon = require('serve-favicon');
passport = require('passport');
LocalStrategy = require('passport-local').Strategy;
cookieParser = require('cookie-parser')

app = express();
app.use(express.static('public'));

//==============================================================================

app.all('/*', function(req, res, next) {
  res.sendFile('index.html', { root: 'public/' });
});

//Add a Website Icon to your site
//app.use(favicon(_dirname + '/public/favicon.ico'))


//Set the localhost settings to:
app.set('port', process.env.PORT || 3000);
server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});