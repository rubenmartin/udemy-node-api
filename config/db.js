var db = require('mongoose');

db.connect('mongodb://test:test@127.0.0.1:27017/workouts');

module.exports = db;
