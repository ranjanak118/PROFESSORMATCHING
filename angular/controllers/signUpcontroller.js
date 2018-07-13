var app = angular.module('myApp',[]);
app.controller('signUpcontroller', function($scope , $http , $window , $state){
    $scope.username = "";
    $scope.email = "";
    $scope.password = "";
    $scope.myFunction1 = function(){
        var data = JSON.stringify({"username": $scope.username, "email": $scope.email, "password": $scope.password});
        console.log(data);
        $http({
            method: "POST",
            url: "http://ieeeprofmatch-test.us-east-1.elasticbeanstalk.com/AuthReg/register/student/",
            data: data ,
            contentType: "application/json"
        }).then(function mySuccess(response) {
            $scope.content = response.data;
            console.log(response);
            $window.localStorage.setItem("token" , response.data.token);
            $state.go('studDetails');
        }, function myError(response) {
            $scope.content = response.statusText;
            console.log(response);
        });
    };
    $scope.myFunction2 = function(){
        var data = JSON.stringify({"username": $scope.username, "email": $scope.email, "password": $scope.password});
        console.log(data);
        $http({
            method: "POST",
            url: "http://ieeeprofmatch-test.us-east-1.elasticbeanstalk.com/AuthReg/register/prof/",
            data: data ,
            contentType: "application/json"
        }).then(function mySuccess(response) {
            $scope.content = response.data;
            console.log(response);
            $window.localStorage.setItem("token" , response.data.token);
            $state.go('profDetails');
        }, function myError(response) {
            $scope.content = response.statusText;
            console.log(response);
        });
    };
});