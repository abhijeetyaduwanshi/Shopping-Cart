var controller = angular.module('shoppingCartApp.drinksController', []);
controller.controller('drinksCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello world from the drinks controller");

	drink1 = {
		productImage: 'images/drinks/drink-coke.jpg',
		productTitle: 'Coke®',
		productDescription: 'The authentic cola sensation that is a refreshing part of sharing life\'s enjoyable moments.',
		productPrice: ''
	};

	drink2 = {
		productImage: 'images/drinks/drink-cocaColaZeroSugar.jpg',
		productTitle: 'Coca-Cola Zero Sugar',
		productDescription: 'Real Coca-Cola® Taste! Now you can cut back on sugar without sacrificing the great Coca-Cola taste you know and love. Coca-Cola Zero Sugar offers you real Coca-Cola taste and uplifting refreshment without any sugar.',
		productPrice: ''
	};

	drink3 = {
		productImage: 'images/drinks/drink-dietCoke.jpg',
		productTitle: 'Diet Coke®',
		productDescription: 'Beautifully balanced adult cola taste in a no calorie beverage.',
		productPrice: ''
	};

	drink4 = {
		productImage: 'images/drinks/drink-cherryCoke.jpg',
		productTitle: 'Cherry Coke®',
		productDescription: 'Combines the great taste of Coca-Cola® with a blast of cherry.',
		productPrice: ''
	};

	drink5 = {
		productImage: 'images/drinks/drink-sprite.jpg',
		productTitle: 'Sprite®',
		productDescription: 'Unique Lymon (lemon-lime) flavor, clear, clean and crisp with no caffeine.',
		productPrice: ''
	};

	drink6 = {
		productImage: 'images/drinks/drink-dasaniBottleWater.jpg',
		productTitle: 'Dasani® Bottle Water',
		productDescription: 'Fresh, crisp tasting water.',
		productPrice: ''
	};

	drink7 = {
		productImage: 'images/drinks/drink-drPepper.jpg',
		productTitle: 'Dr. Pepper®',
		productDescription: 'Unique our own Dr. Pepper direct from the cold fridge.',
		productPrice: ''
	};

	drink8 = {
		productImage: 'images/drinks/drink-barqsRootBeer.jpg',
		productTitle: 'Barq\'s® Root Beer',
		productDescription: 'No one can resist Barq\'s® light fizz and spicy kick.',
		productPrice: ''
	};

	drink9 = {
		productImage: 'images/drinks/drink-fantaOrange.jpg',
		productTitle: 'Fanta® Orange',
		productDescription: 'Exuberant tropical fun to release you from the everyday mundane.',
		productPrice: ''
	};

	drink10 = {
		productImage: 'images/drinks/drinks-lemonadeBottle.jpg',
		productTitle: 'Lemonade Bottle',
		productDescription: 'Made with the goodness of real lemons, Minute Maid® Lemonade is the quintessential refreshing beverage with the great taste of a simpler time.',
		productPrice: ''
	};

	drink11 = {
		productImage: 'images/drinks/drinks-pinkLemonadeBottle.jpg',
		productTitle: 'Pink Lemonade',
		productDescription: 'Made with the goodness of real lemons which are Pink in color, Minute Maid® Pink Lemonade is the quintessential refreshing beverage with the great taste of a simpler time.',
		productPrice: ''
	};

	drink12 = {
		productImage: 'images/drinks/drink-16ozCanMonsterEnergyDrink.jpg',
		productTitle: '16oz Can Monster Energy Drink',
		productDescription: 'Monster packs a powerful punch but has a smooth easy drinking flavor.',
		productPrice: ''
	};

	var drinksList = [drink1, drink2, drink3, drink4, drink5, drink6, drink7, drink8, drink9, drink10, drink11, drink12];
	$scope.drinksList = drinksList;
}]);
