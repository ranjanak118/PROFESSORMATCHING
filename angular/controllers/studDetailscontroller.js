var app = angular.module('myApp');
app.controller('studDetailscontroller', function($scope , $http){
    $scope.username="";
    $scope.firstName="";
    $scope.lastName="";
    $scope.state="";
    $scope.city="";
    $scope.gender="";
    $scope.age="";
    $scope.mobileNo="";
    $scope.cgpa="";
    $scope.yearOfStudy="";
    $scope.branch="";
    $scope.institute="";
    $scope.organisation="";
    $scope.duration="";
    $scope.description="";
    $scope.organisation="";
    $scope.duration="";
    $scope.description="";
    $scope.title="";
    $scope.referenceNo="";
    $scope.collabs="";
    $scope.mentors="";
    $scope.journal="";
    $scope.numCitations="";
    $scope.title="";
    $scope.provider="";
    $scope.year="";
    $scope.title="";
    $scope.Description="";
    $scope.areas="";
    $scope.keywords="";
    $scope.hobbies="";
    $scope.myFunction = function() {
        var data1 = JSON.stringify({
            "username": $scope.username,
            "firstName": $scope.firstName,
            "lastName": $scope.lastName,
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
            "cgpa":$scope.cgpa,
            "yearOfStudy":$scope.yearOfStudy,
            "branch":$scope.branch,
            "institute":$scope.institute,
            "workEx":"organisation:" + $scope.organisation + " " + "duration:" + $scope.duration + " " + "description:" + $scope.description,
            "publications":"title:" + $scope.title + " " + "referenceNo:" + $scope.referenceNo + " " + "collabs:" + $scope.collabs + " " + "mentors:" + $scope.mentors + " " + "journal:" + $scope.journal + " " + "numCitations:" + $scope.numCitations,
            "certificates":"title:" + $scope.title + " " + "provider:" + $scope.provider + " " + "year:" + $scope.year,
            "personalProjects":"title:" + $scope.title + " " + "description:" + $scope.Description,
            "skillsInterest":"areas:" + $scope.areas + " " + "keywords:" + $scope.keywords,
            "hobbies":$scope.hobbies
        });
        console.log(data2);
        $http({
            method: "PUT",
            url: "http://ieeeprofmatch-test.us-east-1.elasticbeanstalk.com/studentBasic/crud/" + $scope.username + '/',
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
            url: "http://ieeeprofmatch-test.us-east-1.elasticbeanstalk.com/studentDetailed/crud/" + $scope.username + '/',
            headers:{"authorization":"Token "+localStorage.getItem("token")},
            contentType: "application/json",
            data: data2
        }).then(function mySuccess(response) {
            $scope.content = response.data;
            console.log(response);
        }, function myError(response) {
            $scope.content = response.statusText;
            console.log(response);
        });
    };
});
