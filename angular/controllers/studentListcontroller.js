var app=angular.module('myApp');
app.controller('studentListcontroller',function($scope , $http){
    $scope.studentList = {};
    $http({
        method:"GET",
        url:" http://ieeeprofmatch-test.us-east-1.elasticbeanstalk.com/studentList/get/" + $scope.username + '/',
        headers:{"authorization":"Token " + localStorage.getItem("token")},
        contentType:"application/json"
    }).then(function mySuccess(response){
        $scope.content=response.data;
        console.log(response);
    }, function myError(response) {
        $scope.content = response.statusText;
        console.log(response);
    });
});