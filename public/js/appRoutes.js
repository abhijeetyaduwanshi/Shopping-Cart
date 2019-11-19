var myApp = angular.module('shoppingCartApp', [
    'ngRoute',
    'shoppingCartApp.navigationController',
    'shoppingCartApp.myCustomDirectives',
    'shoppingCartApp.categoriesListController',
    'shoppingCartApp.specialtyPizzasController',
    'shoppingCartApp.catController',
    'shoppingCartApp.adminController',
    'shoppingCartApp.adminCatDetailsController',
    'shoppingCartApp.cartController'
    ]);

myApp.config(function($routeProvider) {
    // console.log("Hello world from the route provider");

    $routeProvider
    .when('/', {
        templateUrl: '../views/home.html',
        controller: 'categoriesListCtrl'
    })
    .when('/SpecialtyPizzas', {
        templateUrl: '../views/specialtyPizzas.html',
        controller: 'specialtyPizzasCtrl'
    })
    .when('/category/:type', {
        templateUrl: '../views/productView.html',
        controller: 'catCtrl'
    })
    .when('/Admin', {
        templateUrl: '../views/admin.html',
        controller: 'adminCtrl'
    })
    .when('/Admin/catDetails/:type', {
        templateUrl: '../views/adminCatDetails.html',
        controller: 'adminCatDetailsCtrl'
    })
    .when('/Cart', {
        templateUrl: '../views/cartView.html',
        controller: 'cartCtrl'
    });
});
