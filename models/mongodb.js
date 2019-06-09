const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create suresh Schema and model
const SureshSchema = new Schema({
 name: {
     type: String,
     required:[true, 'Name field is required']
 },
 rank: {
     type: String
 },
 available: {
     type: Boolean,
     default: false

 }
 //add in gep location
});

const Suresh = mongoose.model('suresh', SureshSchema);

module.exports = Suresh;