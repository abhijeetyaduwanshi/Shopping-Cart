var myApp = angular.module('shoppingCartApp', ['ngRoute', 'shoppingCartApp.myCustomNavBar']);
myApp.config(function($routeProvider) {
	console.log("Hello world from the route provider");
	$routeProvider
	.when('/', {
		templateUrl: '../views/home.html'
	})
	.when('/AllPizzas', {
		templateUrl: '../views/allPizzas.html'
	});
});
