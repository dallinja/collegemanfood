angular.module('cmf')
	.controller('mainCtrl', function($scope, sampleData) {
		$scope.test = "hello";
		$scope.searching = false;
		$scope.hideBanners = function() {
			$scope.searching = true;
		}
		$scope.checkEmpty = function() {
			if ($scope.search == "") {
				$scope.searching = false;
			}
		}

		$scope.recipes = sampleData.getRecipes();
	})