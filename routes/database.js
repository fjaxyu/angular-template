var mongo = require('mongodb');
var monk = require('monk');
var url = ""
var db = monk(url);
module.exports = db;