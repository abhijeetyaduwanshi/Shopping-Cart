myApp = angular.module('shoppingCartApp.myCustomDirectives', []);
myApp.directive('myNavigation', () => {
    return {
        templateUrl: '../../views/navigationDirective.html'
    };
}).directive('adminAddNewCategory', () => {
    return {
        templateUrl: '../../views/adminAddNewCategoryModal.html'
    };
}).directive('adminEditCategory', () => {
    return {
        templateUrl: '../../views/adminEditCategoryModal.html'
    };
}).directive('adminViewProductDetails', () => {
    return {
        templateUrl: '../../views/adminViewProductDetailsModal.html'
    };
}).directive('adminViewCategoryDetails', () => {
    return {
        templateUrl: '../../views/adminViewCategoryDetailsModal.html'
    };
}).directive('adminDeleteCategory', () => {
    return {
        templateUrl: '../../views/adminDeleteCategoryModal.html'
    };
}).directive('adminAddNewProduct', () => {
    return {
        templateUrl: '../../views/adminAddNewProductModal.html'
    };
}).directive('adminDeleteProduct', () => {
    return {
        templateUrl: '../../views/adminDeleteProductModal.html'
    };
}).directive('adminEditProduct', () => {
    return {
        templateUrl: '../../views/adminEditProductModal.html'
    };
}).directive('cartOnNonCartPages', () => {
    return {
        templateUrl: '../../views/cartOnNonCartPages.html'
    };
}).directive('mobileAddToCart', () => {
    return {
        templateUrl: '../../views/productViewMobileAddToCartModal.html'
    };
});
