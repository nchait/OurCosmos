// app/models/dmca.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DmcaSchema   = new Schema({
    name: String,
    pictures: [String],
    creator:String,
    publicRating: String,
    open: Boolean,
    descrip: String,
    collId: String
});

module.exports = mongoose.model('Dmca', DmcaSchema);