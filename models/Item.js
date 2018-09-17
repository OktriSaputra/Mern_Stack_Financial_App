const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema=new Schema({
	name: {
		type: String,
		required: true
	},
	amount: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}

});

//export model that was just created for the database
module.exports = Item = mongoose.model('item', ItemSchema)