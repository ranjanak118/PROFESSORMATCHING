var app = angular.module('myApp');
app.controller('profDetailscontroller',function($scope , $http , $state){
    $scope.username="";
    $scope.firstName="";
    $scope.lastName="";
    $scope.state="";
    $scope.city="";
    $scope.gender="";
    $scope.age="";
    $scope.mobileNo="";
    $scope.institute="";
    $scope.department="";
    $scope.areas="";
    $scope.websiteLinks="";
    $scope.areas="";
    $scope.keywords="";
    $scope.minWorkEx="";
    $scope.minYearOfStudy="";
    $scope.minCgpa="";
    $scope.branch="";
    $scope.myFunction = function(){
        var data1 = JSON.stringify({
            "username":$scope.username,
            "firstName":$scope.firstName,
            "lastName":$scope.lastName,
            "state":$scope.state,
            "city":$scope.city,
            "gender":$scope.gender,
            "age":$scope.age,
            "mobileNo":$scope.mobileNo,
            "institute":$scope.institute,
            "department":$scope.department,
            "areas":$scope.areas,
            "websiteLinks":$scope.websiteLinks
        });
        console.log(data1);
        var data2 = JSON.stringify({
            "username":$scope.username,
            "areas":$scope.areas,
            "keywords":$scope.keywords,
            "minWorkEx":$scope.minWorkEx,
            "minYearOfStudy":$scope.minYearOfStudy,
            "minCgpa":$scope.minCgpa,
            "branch":$scope.branch
        });
        console.log(data2);
        $http({
            method:  "PUT",
            url: "http://ieeeprofmatch-test.us-east-1.elasticbeanstalk.com/profBasic/crud/" + $scope.username + '/',
            headers:{"authorization":"Token "+localStorage.getItem("token")},
            contentType: "application/json",
            data: data1
        }).then(function mySuccess(response) {
            $scope.content = response.data;
            console.log(response);
        }, function myError(response) {
            $scope.content = response.statusText;
            console.log(response);
        });
        $http({
            method: "PUT",
            url: "http://ieeeprofmatch-test.us-east-1.elasticbeanstalk.com/profDetailed/crud/" + $scope.username + '/',
            headers:{"authorization":"Token "+localStorage.getItem("token")},
            contentType: "application/json",
            data: data2
        }).then(function mySuccess(response) {
            $scope.content = response.data;
            console.log(response);
            $state.go('studentList')
        }, function myError(response) {
            $scope.content = response.statusText;
            console.log(response);
        });
    };
});