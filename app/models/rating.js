// app/models/user.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RatingSchema   = new Schema({
    collectionId : String,
    userId: String,
    rate: Number
    
});

module.exports = mongoose.model('Rating', RatingSchema);