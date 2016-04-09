angular.module('cmf')
	.controller('mainCtrl', function($scope, sampleData) {
		$scope.test = "hello";
		$scope.searching = false;
		$scope.hideBanners = function() {
			$scope.searching = true;
			console.log($scope.filtered)
		}
		$scope.checkEmpty = function() {
			if ($scope.search == "") {
				$scope.searching = false;
				console.log($scope.filtered)
			}
		}

		$scope.recipes = sampleData.getRecipes();
	})