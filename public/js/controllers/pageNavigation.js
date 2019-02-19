var myApp = angular.module('shoppingCartApp', ['ngRoute', 'shoppingCartApp.myCustomNavBar']);
myApp.config(function($routeProvider) {
	console.log("Hello world from the route provider");
	$routeProvider.when('/testOne', {
		templateUrl: '../../views/testOne.html'
	}).when('/testTwo', {
		templateUrl: '../../views/testTwo.html'
	});
});
