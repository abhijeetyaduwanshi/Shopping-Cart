var myApp = angular.module('shoppingCartApp', [
    'ngRoute',
    'shoppingCartApp.myCustomDirectives',
    'shoppingCartApp.categoriesListController',
    'shoppingCartApp.specialtyPizzasController',
    'shoppingCartApp.catController',
    'shoppingCartApp.pastaController',
    'shoppingCartApp.sandwichsController',
    'shoppingCartApp.saladsController',
    'shoppingCartApp.drinksController',
    'shoppingCartApp.extrasController',
    'shoppingCartApp.adminController',
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
    .when('/Pasta', {
        templateUrl: '../views/productView.html',
        controller: 'pastaCtrl'
    })
    .when('/Sandwich', {
        templateUrl: '../views/productView.html',
        controller: 'sandwichsCtrl'
    })
    .when('/Salads', {
        templateUrl: '../views/productView.html',
        controller: 'saladsCtrl'
    })
    .when('/AllDrinks', {
        templateUrl: '../views/productView.html',
        controller: 'drinksCtrl'
    })
    .when('/Extras', {
        templateUrl: '../views/productView.html',
        controller: 'extrasCtrl'
    })
    .when('/Admin', {
        templateUrl: '../views/admin.html',
        controller: 'adminCtrl'
    })
    .when('/Cart', {
        templateUrl: '../views/cartView.html',
        controller: 'cartCtrl'
    });
});
