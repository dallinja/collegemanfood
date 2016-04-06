angular.module('cmf')
	.controller('mainCtrl', function($scope) {
		$scope.test = "hello";
		$scope.searching = false;
		$('#searchbar').keydown(function() {
				$scope.searching = true;
		})
		$('#searchbar').on('keyup', function() {
			var key = event.keyCode || event.charCode;
			console.log($scope.search);
			if( (key == 8 || key == 46) && $scope.search == "a" ) {
		    	$scope.searching = false;
		    }
		 });
	})