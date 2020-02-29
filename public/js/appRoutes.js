myApp = angular.module('shoppingCartApp', [
    'ngRoute',
    'shoppingCartApp.navigationController',
    'shoppingCartApp.myCustomDirectives',
    'shoppingCartApp.categoriesListController',
    'shoppingCartApp.catController',
    'shoppingCartApp.adminController',
    'shoppingCartApp.adminViewProductDetailsController',
    'shoppingCartApp.cartController'
    ]);

myApp.config(($routeProvider) => {

    $routeProvider
    .when('/', {
        templateUrl: '../views/home.html',
        controller: 'categoriesListCtrl'
    })
    .when('/category/:type', {
        templateUrl: '../views/productView.html',
        controller: 'catCtrl'
    })
    .when('/admin', {
        templateUrl: '../views/admin.html',
        controller: 'adminCtrl'
    })
    .when('/Admin/productDetails/:type', {
        templateUrl: '../views/adminViewProductDetails.html',
        controller: 'adminViewProductDetailsCtrl'
    })
    .when('/Cart', {
        templateUrl: '../views/cartView.html',
        controller: 'cartCtrl'
    });
});
