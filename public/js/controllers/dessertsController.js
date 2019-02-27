var controller = angular.module('shoppingCartApp.dessertsController', []);
controller.controller('dessertsCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello world from the desserts controller");

	dessert1 = {
		productImage: 'images/desserts/desserts-cinnamonBreadTwists.jpg',
		productTitle: 'Cinnamon Bread Twists',
		productDescription: 'Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with a perfect blend of cinnamon and sugar, and served with a side of sweet icing for dipping or drizzling.',
		productPrice: ''
	};

	dessert2 = {
		productImage: 'images/desserts/desserts-dominosMarbledCookieBrownie.jpg',
		productTitle: 'Domino\'s Marbled Cookie Brownie™',
		productDescription: 'Satisfy your sweet tooth! Taste the decadent blend of gooey milk chocolate chunk cookie and delicious fudge brownie. Oven-baked to perfection and cut into 9 pieces - this dessert is perfect to share with the whole group.',
		productPrice: ''
	};

	dessert3 = {
		productImage: 'images/desserts/desserts-chocolateLavaCrunchCakes.jpg',
		productTitle: 'Chocolate Lava Crunch Cakes',
		productDescription: 'Indulge in two delectable oven-baked chocolate cakes with molten chocolate fudge on the inside. Perfectly topped with a dash of powdered sugar.',
		productPrice: ''
	};

	var dessertsList = [dessert1, dessert2, dessert3];
	$scope.dessertsList = dessertsList;
}]);
