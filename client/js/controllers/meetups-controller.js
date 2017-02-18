

app.controller('meetupsController', ['$scope', '$resource',  function($scope, $resource){
	
	var Meetup = $resource('/api/meetups');
	
	$scope.meetups = [
					{ name: "This is 1st meetup"},
					{ name: "This is 2nd meetup"}
					];
	
	$scope.createMeetup = function() {
		var meetup = new Meetup();
		meetup.name  = $scope.meetupName ;
		meetup.$save();
	};
	
	
}]);
