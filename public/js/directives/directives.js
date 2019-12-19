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
}).directive('adminViewProductDetails', function() {
    return {
        templateUrl: '../../views/adminViewProductDetailsModal.html'
    };
}).directive('adminViewCategoryDetails', function() {
    return {
        templateUrl: '../../views/adminViewCategoryDetailsModal.html'
    };
}).directive('adminDeleteCategory', function() {
    return {
        templateUrl: '../../views/adminDeleteCategoryModal.html'
    };
}).directive('adminAddNewProduct', function() {
    return {
        templateUrl: '../../views/adminAddNewProductModal.html'
    };
}).directive('adminDeleteProduct', function() {
    return {
        templateUrl: '../../views/adminDeleteProductModal.html'
    };
});
