angular.module('cmf')
.service('adminService', function() {
	var admin = false;
	this.toggleAdmin = function () {
		admin = !admin;
		// return !admin;
	}
	this.getAdmin = function() {
		return admin;
	}
})