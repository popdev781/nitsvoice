
var app = angular.module('myApp', [] );
app.controller('meetupsController', ['$scope', function($scope){
	$scope.meetups = [
	{ name: "This is 1st meetup"},
	{ name: "This is 2nd meetup"}
	];
	console.log("blah");
	$scope.createMeetup = function() {
		// console.log("blah-blah");
		$scope.meetups.push({ name: $scope.meetupName });
		$scope.meetupName = "";
	};
}]);
