var app = angular
	.module('cmf', [
		'ui.router',
		'auth0',
		'angular-storage',
		'angular-jwt'])
	.config(function($stateProvider, $urlRouterProvider, authProvider, $httpProvider, jwtInterceptorProvider) {
				authProvider.init({
					domain: 'collegemanfood.auth0.com',
					clientID: 'Vac7fLKAvHcMuCPsx8ZzeFv3mo9mB3zz'
				});
				authProvider.on('loginSuccess', function($location, profilePromise, idToken, store) {
				  console.log("Login Success");
				  profilePromise.then(function(profile) {
				    store.set('profile', profile);
				    store.set('token', idToken);
				  });
				  $location.path('/');
				});

				authProvider.on('loginFailure', function() {
				   // Error Callback
				});

				jwtInterceptorProvider.tokenGetter = ['store', function(store) {
			    // Return the saved token
			    return store.get('token');
			  }];

			  $httpProvider.interceptors.push('jwtInterceptor');

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

		.run(function($rootScope, auth, store, jwtHelper, $location) {
			// This hooks al auth events to check everything as soon as the app starts
			auth.hookEvents();
			// This events gets triggered on refresh or URL change
			$rootScope.$on('$locationChangeStart', function() {
		    var token = store.get('token');
		    if (token) {
		      if (!jwtHelper.isTokenExpired(token)) {
		        if (!auth.isAuthenticated) {
		          auth.authenticate(store.get('profile'), token);
		        }
		      } else {
		        // Either show the login page or use the refresh token to get a new idToken
		        $location.path('/');
		      }
		    }
		  });
		});
