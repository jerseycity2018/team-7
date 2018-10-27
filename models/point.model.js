const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let pointSchema = new Schema({
	latitude: {type: Number, required: true},
	longitude: {type: Number, required: true},
});

//Export Model
module.exports = mongoose.model('Point', pointSchema)