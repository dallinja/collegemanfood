var app = angular
	.module('cmf', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
	        .state('home', {
	            templateUrl: 'views/main.html',
	            controller: 'mainCtrl'
	        })
					.state('home.gallery', {
	            url: '/home',
							parent:'home',
	            views:{
								'dashboard@home':{
									templateUrl: 'views/homeGallery.html',
								}
							}
	        })
					.state('home.search', {
	            url: '/search',
							parent:'home',
	            views:{
								'dashboard@home':{
									templateUrl: 'views/homeSearch.html',
									}
							}
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
