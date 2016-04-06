angular.module('cmf')
.service('sampleData', function() {
	this.getUsers = function () {
		return users;
	}
	this.getRecipes = function () {
		return recipes;
	}
	this.getRecipe = function (recipeId) {
		for (var i = 0; i < recipes.length; i++) {
            if (recipes[i].id === parseInt(recipeId)) {
                return recipes[i];
            }
        };
	}
	var users = [
		{
			id: '10000',
			firstName: 'Jordan',
			lastName: 'Roper',
			email: 'jordanroper@gmail.com',
			favorites: [
				'1000',
				'1001',
				'1002',
				'1004',
				'1009'
			]
		},
		{
			id: '10001',
			firstName: 'Jono',
			lastName: 'Castleton',
			email: 'jonocastleton@gmail.com',
			favorites: [
				'1003',
				'1002',
				'1001',
				'1004',
				'1005'
			]
		},
		{
			id: '10002',
			firstName: 'Doug',
			lastName: 'Hicken',
			email: 'doughicken@gmail.com',
			favorites: [
				'1004',
				'1008',
				'1003',
				'1002',
				'1001'
			]
		}
	];
	var recipes = [
		{
			id: 1000,
			name: 'Apple Cumin Pork Ribs',
			prepTime: '15',
			cookTime: '8:00',
			calories: 700,
			protein: 36,
			fat: 12,
			carbs: 4,
			servings: 5,
			totalCost: 17.50,
			directions: [
				'Brown ribs in pan on both sides',
				'Chop apples and onions and combine',
				'Combine all ingedients in crockpot, turn on, and enjoy!'
			],
			ingredients: [
				{
					amount: .5,
					unit: 'rack',
					ingredient: 'pork ribs'
				},
				{
					amount: 1,
					unit: 'cup',
					ingredient: 'diced apples'
				},
				{
					amount: .5,
					unit: 'cup',
					ingredient: 'chopped onions'
				},
				{
					amount: 2,
					unit: 'Tbs',
					ingredient: 'ground cumin'
				},
				{
					amount: 1,
					unit: 'tsp',
					ingredient: 'salt'
				}
			],
			ratings: [
				{
					user: '10002',
					date: '4/3/20016',
					subject: 'Loved it!',
					comment: 'This was the best thing I\'ve ever had. Love it! Love it!'
				},
				{
					user: '10001',
					date: '4/3/20016',
					subject: 'I liked it',
					comment: 'Pretty good stuff.'
				},
				{
					user: '10002',
					date: '4/4/20016',
					subject: 'Not incredible',
					comment: 'I wont make it again'
				},
				{
					user: '10003',
					date: '4/4/20016',
					subject: 'Awesome recipe! Tastes so good',
					comment: 'Loved it!'
				}
			]
		},
		{
			id: 1001,
			name: 'Steak Salad Surprise',
			prepTime: '25',
			cookTime: '2:00',
			calories: 340,
			protein: 26,
			fat: 10,
			carbs: 10,
			servings: 3,
			totalCost: 10.50,
			directions: [
				'Toss salad in the air like you just don\'t care',
				'Chop apples and onions and combine',
				'Combine all ingedients and enjoy!'
			],
			ingredients: [
				{
					amount: 1,
					unit: 'head',
					ingredient: 'lettuce'
				},
				{
					amount: 1,
					unit: 'cup',
					ingredient: 'diced apples'
				},
				{
					amount: .5,
					unit: 'cup',
					ingredient: 'craisens'
				},
				{
					amount: 2,
					unit: 'Tbs',
					ingredient: 'spice'
				},
				{
					amount: 1,
					unit: 'tsp',
					ingredient: 'salt'
				}
			],
			ratings: [
				{
					user: '10002',
					date: '4/3/20016',
					subject: 'Loved it!',
					comment: 'This was the best thing I\'ve ever had. Love it! Love it!'
				},
				{
					user: '10001',
					date: '4/3/20016',
					subject: 'I liked it',
					comment: 'Pretty good stuff.'
				},
				{
					user: '10002',
					date: '4/4/20016',
					subject: 'Not incredible',
					comment: 'I wont make it again'
				},
				{
					user: '10003',
					date: '4/4/20016',
					subject: 'Awesome recipe! Tastes so good',
					comment: 'Loved it!'
				}
			]
		},
		{
			id: 1002,
			name: 'Awesome Possum',
			prepTime: '12',
			cookTime: '10:00',
			calories: 820,
			protein: 16,
			fat: 12,
			carbs: 34,
			servings: 4,
			totalCost: 20.00,
			directions: [
				'Find a dead possum on the road',
				'Chop apples and onions and combine',
				'Cook her up and enjoy!'
			],
			ingredients: [
				{
					amount: 1,
					unit: 'head',
					ingredient: 'possum'
				},
				{
					amount: 1,
					unit: 'arm',
					ingredient: 'possum'
				},
				{
					amount: .5,
					unit: 'cup',
					ingredient: 'craisens'
				},
				{
					amount: 2,
					unit: 'Tbs',
					ingredient: 'spice'
				},
				{
					amount: 1,
					unit: 'tsp',
					ingredient: 'salt'
				}
			],
			ratings: [
				{
					user: '10002',
					date: '4/3/20016',
					subject: 'Loved it!',
					comment: 'This was the best thing I\'ve ever had. Love it! Love it!'
				},
				{
					user: '10001',
					date: '4/3/20016',
					subject: 'I liked it',
					comment: 'Pretty good stuff.'
				},
				{
					user: '10002',
					date: '4/4/20016',
					subject: 'Not incredible',
					comment: 'I wont make it again'
				},
				{
					user: '10003',
					date: '4/4/20016',
					subject: 'Awesome recipe! Tastes so good',
					comment: 'Loved it!'
				}
			]
		}
	];
})