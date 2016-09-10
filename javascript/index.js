var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http({
        method : "GET",
        url : "json/data.json"
    }).then(function(response) {
        $scope.data = response.data;
   });
});
