// app/models/user.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CollectionSchema   = new Schema({
    name: String,
    pictures: [String],
    creator:String,
    publicRating: Number,
    open: Boolean,
    descrip: String
});

module.exports = mongoose.model('Collection', CollectionSchema);