const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let pointSchema = new Schema({
	latitude: {type: Number, required: true},
	longitude: {type: Number, required: true},
	recycled: {type: Number, required: true},
	img: {type: String, required: false},
	title: {type: String, required: true},
	body: {type: String, required: true},
	category: {type: String, required: true},
	upVotes: {type: Number, required: true},
	time: {type: String, required: true},
	UID: {type: Number, required: true},
});

//Export Model
module.exports = mongoose.model('Point', pointSchema)