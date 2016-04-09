var Recipe = require('../models/Recipe.js');
var mongoose = require('mongoose');

module.exports = {
	index: function(req, res, next) {
		Recipe
		.find(req.query)
		.exec(function(err, result) {
			if (err) return next(err);
			res.status(200).json(result);
		})
	},

	show: function(req, res, next) {
		Recipe
		.findById(req.params.id)
		.populate('author')
		// .limit(1)
		// .sort({ title: 1 })
		.exec(function(err, result) {
			if (err) return next(err);
			res.status(200).json(result);
		})
	},

	create: function(req, res, next) {
		Recipe
		.create(req.body, function(err, result) {
			if (err) return next(err);
			res.status(200).json(result);
		})
	},

	update: function(req, res, next) {
		Recipe
		.findOneAndUpdate(
			{ _id: mongoose.Types.ObjectId(req.params.id) },
			req.body,
			{ new: true },
			function(err, result) {
				if (err) return next(err);
				res.status(200).json(result);
			}
		);
	},

	destroy: function(req, res, next) {
		Recipe.findByIdAndRemove(req.params.id)
		.exec(function(err, result) {
			if (err) return next(err);
			res.status(200).json(result);
		})
	}

}