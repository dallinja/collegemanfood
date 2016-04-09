angular.module('cmf')
	.controller('mainCtrl', function($scope, sampleData, auth, $state, $stateParams) {
		$scope.test = "hello";
		$scope.searching = false;
		$scope.hideBanners = function() {
			$scope.searching = true;
			$state.go('home.search', {route:'search'})
		}

		$scope.isRoute = function(route){
			if(route === $stateParams.route) return true
			else return false;
		}

		$scope.logout = function() {
		  auth.signout();
		  store.remove('profile');
		  store.remove('token');
		}

		function UserInfoCtrl($scope, auth) {
  		$scope.auth = auth;
}

		$scope.goHome = function() {
    	$state.go('home.gallery');
			$scope.searching = false;
		};
		$scope.auth = auth;
		$scope.recipes = sampleData.getRecipes();
	})

	// Auth0
	.controller( 'LoginCtrl', function ( $scope, auth) {
	  $scope.auth = auth;
	});
