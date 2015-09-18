angular.module('hello', []).controller('home',

function($scope, $http) {
	
	console.log('Loading')

	$http.get('user').success(function(data) {
		if (data.name) {
			$scope.authenticated = true;
			$scope.user = data.name;
			$scope.roles = data.roles;
			$http.get('/resource/').success(function(data) {
				$scope.greeting = data;
			})
		} else {
			$scope.authenticated = false;
		}
	}).error(function() {
		$scope.authenticated = false;
	});

	$scope.isAuthorized = function(role) {
		return $scope.roles.indexOf(role) > 0;
	};


	console.log('Done')

});
