var myApp = angular.module('shoppingCartApp.myCustomDirectives', []);
myApp.directive('myNavigation', function() {
    return {
        templateUrl: '../../views/navigationDirective.html'
    };
}).directive('adminAddNewCategory', function() {
    return {
        templateUrl: '../../views/adminAddNewCategoryModal.html'
    };
}).directive('adminEditCategory', function() {
    return {
        templateUrl: '../../views/adminEditCategoryModal.html'
    };
}).directive('adminViewCategoryDetails', function() {
    return {
        templateUrl: '../../views/adminViewCategoryDetailsModal.html'
    };
}).directive('adminDeleteCategory', function() {
    return {
        templateUrl: '../../views/adminDeleteCategoryModal.html'
    };
}).directive('adminAddProducts', function() {
    return {
        templateUrl: '../../views/adminAddProductsModal.html'
    };
});
