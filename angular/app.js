var app = angular.module('myApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/signUp');

    $stateProvider
        .state('signUp',{
            url: '/signUp',
            templateUrl: 'partials/signUp.html',
            controller:  'signUpcontroller'
        })
        .state('studDetails',{
            url: '/studDetails',
            templateUrl: 'partials/studDetails.html',
            controller: 'studDetailscontroller'
        })
        .state('profDetails',{
            url: '/profDetails',
            templateUrl: 'partials/profDetails.html',
            controller: 'profDetailscontroller'
        })
        .state('studentList',{
            url: '/studentList',
            templateUrl: 'partials/studentList.html',
            controller: 'studentListcontroller'
        })
});