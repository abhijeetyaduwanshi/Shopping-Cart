var myApp = angular.module('shoppingCartApp.myCustomNavBar', []);
myApp.directive('myNavigation', function() {
    return {
        templateUrl: '../../views/navigationDirective.html'
    };
});
