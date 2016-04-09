var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	prepTime: {
		hrs: { type: Number, min:0, require: true },
		min: { type: Number, min:0, max: 60, require: true }
	},
	cookTime: {
		hrs: { type: Number, min:0, require: true },
		min: { type: Number, min:0, max: 60, require: true }
	},
	calories: { type: Number, min:0, require: true },
	protein: { type: Number, min:0, require: true },
	fat: { type: Number, min:0, require: true },
	carbs: { type: Number, min:0, require: true },
	servings: { type: Number, min:0, require: true },
	totalCost: { type: Number, min:0, require: true },
	directions: [ { type: String, required: true } ],
	ingredients: [ {
		amount: { type: Number, required: true },
		unit: { type: String, required: true },
		ingredient: { type: String, required: true }
	} ],
	ratings: [ {
		user: { type: Number, required: true },
		date: { type: String, required: true },
		subject: { type: String, required: true },
		comment: { type: String, required: true }
	} ],

	author: { type: mongoose.Schema.ObjectId, ref: 'Author' },
	datePublished: { type: Date },
	rating: { type: Number, min: 0, max: 10 }, // make sure its an integer
	genre: { type: String, enum: ['fiction', 'non-fiction'] },
	created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recipe', schema);
