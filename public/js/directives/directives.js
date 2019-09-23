var myApp = angular.module('shoppingCartApp.myCustomDirectives', []);
myApp.directive('myNavigation', function() {
    return {
        templateUrl: '../../views/navigationDirective.html'
    };
}).directive('adminAddNewCategory', function() {
    return {
        templateUrl: '../../views/adminAddNewCategoryModal.html'
    };
}).directive('adminViewCategoryDetails', function() {
    return {
        templateUrl: '../../views/adminViewCategoryDetailsModal.html'
    };
});
