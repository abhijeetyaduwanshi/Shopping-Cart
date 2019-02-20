var myApp = angular.module('shoppingCartApp', [
	'ngRoute',
	'shoppingCartApp.myCustomNavBar',
	'shoppingCartApp.categoriesListController',
	'shoppingCartApp.specialtyPizzasController'
	]);

myApp.config(function($routeProvider) {
	console.log("Hello world from the route provider");

	$routeProvider
	.when('/', {
		templateUrl: '../views/home.html',
		controller: 'categoriesListCtrl'
	})
	.when('/SpecialtyPizzas', {
		templateUrl: '../views/specialtyPizzas.html',
		controller: 'specialtyPizzasCtrl'
	});
});
