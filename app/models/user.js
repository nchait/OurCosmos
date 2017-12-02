// app/models/user.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    username: String,
    password: String,
    email: String,
    verification: String,
    cookie: String
    
});

module.exports = mongoose.model('User', UserSchema);