var myApp = angular.module('shoppingCartApp.myCustomNavBar', []);
myApp.controller('navigationDirectiveCtrl', ['$scope', function($scope) {
	console.log("Hello world from the navigation directive controller");
}]).directive('myNavigation', function() {
	return {
		templateUrl: '../../views/navigationDirective.html'
	};
});



// var myApp = angular.module('shoppingCartApp.myCustomNavBar', []);
// myApp.directive('myNavigation', function() {
// 	return {
// 		templateUrl: '../html/navigationDirective.html',
// 		controller: ['$scope', function($scope) {
// 			console.log("Hello world from the navigation directive controller");
// 		}]
// 	};
// });
