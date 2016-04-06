var app = angular
	.module('cmf', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
	        .state('home', {
	            url: '/',
	            templateUrl: 'views/main.html',
	            controller: 'mainCtrl'
	        })
	        .state('recipe', {
	            url: '/recipe/:idNumber',
	            templateUrl: 'views/recipe.html',
	            controller: 'recipesCtrl',
	            resolve: {
					getRecipe: function(sampleData, $stateParams) {
						var recipeId = $stateParams.idNumber;
						return sampleData.getRecipe(recipeId);
					}
				}
	        })
	        .state('login', {
	            url: '/login',
	            templateUrl: 'views/login.html',
	            controllerUrl: 'controllers/loginCtrl.js'
	        })
	        .state('accountSettings', {
	            url: '/account-settings',
	            templateUrl: 'views/account-settings.html',
	            controllerUrl: 'controllers/accountSettingsCtrl.js'
	        })
	        .state('favorites', {
	            url: '/favorites',
	            templateUrl: 'views/favorites.html',
	            controllerUrl: 'controllers/favoritesCtrl.js'
	        })
	    })