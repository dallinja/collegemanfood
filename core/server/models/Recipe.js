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
		user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
		subject: { type: String, required: true }, // make sure its an integer
		rating: { type: Number, min: 0, max: 5, required: true },
		comment: { type: String, required: true },
		created_at: { type: Date, default: Date.now }
	} ]
});

module.exports = mongoose.model('Recipe', schema);
