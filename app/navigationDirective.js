var myApp = angular.module('navigationDirective', []);
myApp.controller('navigationDirectiveCtrl', ['$scope', function($scope) {
	console.log("Hello world from the navigation directive controller");
}]).directive('myNavigation', function() {
	return {
		templateUrl: 'navigationDirective.html'
	};
});
