var HomePageController = angular.module("HomePageController", []);

HomePageController.controller("HomePageController", ["$scope", "$location", "$rootScope", "$sessionStorage", "User", function($scope, $location, $rootScope, $sessionStorage, User) {
    $rootScope.pageTitle = "My App - Home";
    console.log("Home Page Controller");
    
}])