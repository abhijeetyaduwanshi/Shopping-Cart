angular.module("myApp", [])
.controller("myCtrl", function($scope) {
    person1 = {
        fname: "One",
        lname: "Apple"
    },
    person2 = {
        fname: "Two",
        lname: "Banana"
    },
    person3 = {
        fname: "Three",
        lname: "Cat"
    },
    person4 = {
        fname: "Four",
        lname: "Dog"
    },
    person5 = {
        fname: "Five",
        lname: "Elephant"
    }
    var peopleList = [person1, person2, person3, person4, person5];
    $scope.peopleList = peopleList;
})
.controller("personCtrl", function($scope) {
    $scope.firstName = "Abhijeet";
    $scope.lastName = "Yaduwanshi";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
})
.directive("myHeader", function() {
    return {
        restrict: "E",
        template: "<h1>Header comes here</h1>"
    };
})
.controller("testCtrl", function($scope, $timeout) {
    $scope.myHeader = "Hello, world";
    $timeout(function() {
        $scope.myHeader = "Hello, I world";
    }, 2000);
})
.service("nameChanger", function() {
    this.nameFunction = function(name) {
        return name = "Abhijeet";
    }
})
.controller("serviceCtrl", function($scope, nameChanger) {
    $scope.name = nameChanger.nameFunction("myName");
});
