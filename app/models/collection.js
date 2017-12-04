// app/models/user.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CollectionSchema   = new Schema({
    name: String,
    pictures: [String],
    creator:String,
    publicRating: String,
    open: Boolean,
    descrip: String,
    disabled: Boolean
});

module.exports = mongoose.model('Collection', CollectionSchema);

//438