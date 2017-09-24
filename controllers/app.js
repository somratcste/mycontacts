var myApp = angular.module("myApp",['ngRoute']);

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