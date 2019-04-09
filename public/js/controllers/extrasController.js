var controller = angular.module('shoppingCartApp.extrasController', []);
controller.controller('extrasCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello world from the extras controller");

	extras1 = {
		productImage: 'images/extras/extras-parmesanCheesePackets.jpg',
		productTitle: 'Parmesan Cheese Packets',
		productDescription: 'Grated Parmesan cheese packets.',
		productPrice: ''
	};

	extras2 = {
		productImage: 'images/extras/extras-redPepperPackets.jpg',
		productTitle: 'Red Pepper Packets',
		productDescription: 'Crushed red pepper flake packets.',
		productPrice: ''
	};

	extras3 = {
		productImage: 'images/extras/extras-kickerHotSauce.jpg',
		productTitle: 'Kicker Hot Sauce',
		productDescription: 'Domino\'s own spicy Buffalo sauce.',
		productPrice: ''
	};

	extras4 = {
		productImage: 'images/extras/extras-sweetMangoHabaneroSauce.jpg',
		productTitle: 'Sweet Mango Habanero Sauce',
		productDescription: 'A perfect blend of sweet and spicy in one sauce.',
		productPrice: ''
	};

	extras5 = {
		productImage: 'images/extras/extras-bbqSauce.jpg',
		productTitle: 'BBQ Sauce',
		productDescription: 'A smoky BBQ sauce with bold flavor.',
		productPrice: ''
	};

	extras6 = {
		productImage: 'images/extras/extras-ranch.jpg',
		productTitle: 'Ranch',
		productDescription: 'A creamy buttermilk ranch dressing with hints of garlic and onion.',
		productPrice: ''
	};

	extras7 = {
		productImage: 'images/extras/extras-blueCheese.jpg',
		productTitle: 'Blue Cheese',
		productDescription: 'A creamy dressing with bits of aged blue cheese.',
		productPrice: ''
	};

	extras8 = {
		productImage: 'images/extras/extras-garlicDippingSauce.jpg',
		productTitle: 'Garlic Dipping Sauce',
		productDescription: 'A buttery garlic sauce.',
		productPrice: ''
	};

	extras9 = {
		productImage: 'images/extras/extras-icingDippingSauce.jpg',
		productTitle: 'Icing Dipping Sauce',
		productDescription: 'A thick sweet icing with a hint of vanilla.',
		productPrice: ''
	};

	extras10 = {
		productImage: 'images/extras/extras-marinaraDippingSauce.jpg',
		productTitle: 'Marinara Dipping Sauce',
		productDescription: 'A sweet tomato sauce blended with garlic, basil and oregano.',
		productPrice: ''
	};

	extras11 = {
		productImage: 'images/extras/extras-caesarDressing.jpg',
		productTitle: 'Caesar Dressing',
		productDescription: 'A savory dressing with a combination of garlic, anchovy and subtle notes of cheese.',
		productPrice: ''
	};

	extras12 = {
		productImage: 'images/extras/extras-italianDressing.jpg',
		productTitle: 'Italian Dressing',
		productDescription: 'A classic dressing flavored with red bell pepper, a touch of garlic and spices.',
		productPrice: ''
	};

	extras13 = {
		productImage: 'images/extras/extras-ranchDressing.jpg',
		productTitle: 'Ranch Dressing',
		productDescription: 'A creamy, flavorful dressing with a blend of buttermilk, garlic, onion and spices.',
		productPrice: ''
	};

	extras14 = {
		productImage: 'images/extras/extras-balsamic.jpg',
		productTitle: 'Balsamic',
		productDescription: 'A light dressing with a blend of balsamic vinegar, oil and garlic.',
		productPrice: ''
	};

	var extrasList = [extras1, extras2, extras3, extras4, extras5, extras6, extras7, extras8, extras9, extras10, extras11];
	$scope.extrasList = extrasList;
}]);
