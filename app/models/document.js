// app/models/user.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DocumentSchema   = new Schema({
    info: String,
    name: String
});

module.exports = mongoose.model('Document', DocumentSchema);