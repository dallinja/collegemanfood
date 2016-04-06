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
	            url: '/recipe/:id',
	            templateUrl: 'views/recipe.html',
	            controllerUrl: 'controllers/recipeCtrl.js'
	   //          resolve: {
				// 	getHero: function(dataService, $stateParams) {
				// 		var heroId = $stateParams.idNumber;
				// 		console.log($stateParams)
				// 		return dataService.getHero(heroId);
				// 	}
				// }
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