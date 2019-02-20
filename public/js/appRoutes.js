var myApp = angular.module('shoppingCartApp', ['ngRoute', 'shoppingCartApp.myCustomNavBar', 'shoppingCartApp.categoriesListController']);
myApp.config(function($routeProvider) {
	console.log("Hello world from the route provider");

	$routeProvider
	.when('/', {
		templateUrl: '../views/home.html',
		controller: 'categoriesListCtrl'
	})
	.when('/AllPizzas', {
		templateUrl: '../views/allPizzas.html'
	});
});
