angular.module('cmf')
	.controller('mainCtrl', function($scope, sampleData, $state, $stateParams) {
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

		$scope.goHome = function() {
    	$state.go('home.gallery');
			$scope.searching = false;
};

		$scope.recipes = sampleData.getRecipes();
	})
