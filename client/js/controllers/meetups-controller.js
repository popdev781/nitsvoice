app.controller('meetupsController', ['$scope', '$resource', function($scope, $resource) {

    var Meetup = $resource('/api/meetups');

    //  This is just a test nothing serious
    var Comments = $resource('/comments/all');
    console.log(typeof(Comments));
    console.log(Comments);
    $scope.meetups = [
        { name: "This is 1st meetup" },
        { name: "This is 2nd meetup" }
    ];

    $scope.createMeetup = function() {
        var meetup = new Meetup();
        meetup.name = $scope.meetupName;
        meetup.$save();
    };


}]);