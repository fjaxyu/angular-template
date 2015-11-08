var HomePageController = angular.module("HomePageController", []);

HomePageController.controller("HomePageController", ["$scope", "$sessionStorage", "$rootScope", "$location", "User", function($scope, $location, $rootScope, $sessionStorage, User) {
    $rootScope.pageTitle = "My App - Home";
    console.log("Home Page Controller");
    
}])