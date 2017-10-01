var myApp = angular.module("myApp",['ngRoute','firebase']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "templates/list.html",
            controller : "MainController"
        })
        .otherwise({
            redirectTo : '/'
        });
})