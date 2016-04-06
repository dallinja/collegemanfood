angular.module('cmf')
	.controller('recipesCtrl', function($scope, $state, getRecipe) {
		$scope.testy = 'what what';
		$scope.recipe = getRecipe;
		$scope.admin = false;
		$scope.toggleAdmin = function () {
			$scope.admin = !$scope.admin;
			console.log($scope.admin);
		}
	})