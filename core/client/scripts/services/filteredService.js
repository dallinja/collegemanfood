angular.module('cmf')
.service('filteredService', function($stateParams) {
	var filteredArray = [];
	this.setFilteredArray = function(arr) {
		filteredArray = arr;
	}
	this.getPrevNext = function (arr, id) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].id === id) {
				return {prev: (i - 1), next: (i + 1)}
			}
		};
	}
})