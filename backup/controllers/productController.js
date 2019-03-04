var myApp = angular.module('myApp', []);
myApp.controller('productCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello world from the product controller");

	popularItemProduct1 = {
		productName: 'Large (14") Hand Tossed Pizza'
	};

	popularItemProduct2 = {
		productName: 'Large (14") Hand Tossed Pizza Whole: Pepperoni'
	};

	popularItemProduct3 = {
		productName: 'Medium (12") Hand Tossed Pizza Whole: Ham, Pinapple'
	};

	popularItemProduct4 = {
		productName: 'Medium (12") Hand Tossed Pizza Whole: Mashrooms, Pepperoni'
	};

	popularItemProduct5 = {
		productName: 'Medium (12") Hand Tossed Pacific Veggie'
	};

	popularItemProduct6 = {
		productName: 'Chicken Bacon Ranch Sandwich'
	};

	popularItemProduct7 = {
		productName: 'Chicken Alfredo Pasta'
	};

	popularItemProduct8 = {
		productName: '8-Piece BBQ Wings (1) Ranch'
	};

	popularItemProduct9 = {
		productName: 'Chocolate Lava Crunch Cakes'
	};

	var popularItemProductList = [[popularItemProduct1, popularItemProduct2, popularItemProduct3], [popularItemProduct4, popularItemProduct5, popularItemProduct6], [popularItemProduct7, popularItemProduct8, popularItemProduct9]];
	$scope.popularItemProductList = popularItemProductList;

	sidesSaladProduct1 = {
		productImage: 'sides-salad-classic-garden.jpg',
		productName: 'Classic Garden',
		productMessage: 'A crisp and colorful combination of grape tomatoes, red onion, carrots, red cabbage, cheddar cheese and brioche garlic croutons, all atop a blend of romaine and iceberg lettuce.'
	};

	sidesSaladProduct2 = {
		productImage: 'sides-salad-chicken-caesar.jpg',
		productName: 'Chicken Caesar',
		productMessage: 'The makings of a classic: roasted white meat chicken, Parmesan cheese and brioche garlic croutons, all atop a blend of romaine and iceberg lettuce.'
	};

	var sidesSaladProductList = [[sidesSaladProduct1, sidesSaladProduct2]];
	$scope.sidesSaladProductList = sidesSaladProductList;

	sidesExtraProduct1 = {
		productImage: 'sides-extra-parmesan-cheese-packets.jpg',
		productName: 'Parmesan Cheese Packets',
		productMessage: 'Grated Parmesan cheese packets'
	}

	sidesExtraProduct2 = {
		productImage: 'sides-extra-red-pepper-packets.jpg',
		productName: 'Red Pepper Packets',
		productMessage: 'Crushed red pepper flake packets'
	}

	sidesExtraProduct3 = {
		productImage: 'sides-extra-kicker-hot-sauce.jpg',
		productName: 'Kicker Hot Sauce',
		productMessage: 'Domino\'s own spicy Buffalo sauce'
	}

	sidesExtraProduct4 = {
		productImage: 'sides-extra-sweet-mango-habanero-sauce.jpg',
		productName: 'Sweet Mango Habanero Sauce',
		productMessage: 'A perfect blend of sweet and spicy in one sauce'
	}

	sidesExtraProduct5 = {
		productImage: '',
		productName: 'BBQ Sauce',
		productMessage: 'A smoky BBQ sauce with bold flavor'
	}

	sidesExtraProduct6 = {
		productImage: 'sides-extra-ranch.jpg',
		productName: 'Ranch',
		productMessage: 'A creamy buttermilk ranch dressing with hints of garlic and onion'
	}

	sidesExtraProduct7 = {
		productImage: 'sides-extra-blue-cheese.jpg',
		productName: 'Blue Cheese',
		productMessage: 'A creamy dressing with bits of aged blue cheese'
	}

	sidesExtraProduct8 = {
		productImage: 'sides-extra-garlic-dipping-sauce.jpg',
		productName: 'Garlic Dipping Sauce',
		productMessage: 'A buttery garlic sauce'
	}

	sidesExtraProduct9 = {
		productImage: 'sides-extra-icing-dipping-sauce.jpg',
		productName: 'Icing Dipping Sauce',
		productMessage: 'A thick sweet icing with a hint of vanilla'
	}

	sidesExtraProduct10 = {
		productImage: 'sides-extra-marinara-dipping-sauce.jpg',
		productName: 'Marinara Dipping Sauce',
		productMessage: 'A sweet tomato sauce blended with garlic, basil and oregano'
	}

	sidesExtraProduct11 = {
		productImage: 'sides-extra-caesar-dressing.jpg',
		productName: 'Caesar Dressing',
		productMessage: 'A savory dressing with a combination of garlic, anchovy and subtle notes of cheese.'
	}

	sidesExtraProduct12 = {
		productImage: 'sides-extra-italian-dressing.jpg',
		productName: 'Italian Dressing',
		productMessage: 'A classic dressing flavored with red bell pepper, a touch of garlic and spices.'
	}

	sidesExtraProduct13 = {
		productImage: 'sides-extra-ranch-dressing.jpg',
		productName: 'Ranch Dressing',
		productMessage: 'A creamy, flavorful dressing with a blend of buttermilk, garlic, onion and spices.'
	}

	sidesExtraProduct14 = {
		productImage: 'sides-extra-balsamic.jpg',
		productName: 'Balsamic',
		productMessage: 'A light dressing with a blend of balsamic vinegar, oil and garlic.'
	}

	var sidesExtraProductList = [[sidesExtraProduct1, sidesExtraProduct2, sidesExtraProduct3], [sidesExtraProduct4, sidesExtraProduct5, sidesExtraProduct6], [sidesExtraProduct7, sidesExtraProduct8, sidesExtraProduct9], [sidesExtraProduct10, sidesExtraProduct11, sidesExtraProduct12], [sidesExtraProduct13, sidesExtraProduct14]];
	$scope.sidesExtraProductList = sidesExtraProductList;

	drinkProduct1 = {
		productImage: 'drink-coke.jpg',
		productName: 'Coke®',
		productMessage: 'The authentic cola sensation that is a refreshing part of sharing life\'s enjoyable moments.'
	};

	drinkProduct2 = {
		productImage: 'drink-coca-cola-zero-sugar.jpg',
		productName: 'Coca-Cola Zero Sugar',
		productMessage: 'Real Coca-Cola® Taste! Now you can cut back on sugar without sacrificing the great Coca-Cola taste you know and love. Coca-Cola Zero Sugar offers you real Coca-Cola taste and uplifting refreshment without any sugar.'
	};

	drinkProduct3 = {
		productImage: 'drink-diet-coke.jpg',
		productName: 'Diet Coke®',
		productMessage: 'Beautifully balanced adult cola taste in a no calorie beverage.'
	};

	drinkProduct4 = {
		productImage: '',
		productName: 'Cherry Coke®',
		productMessage: 'Combines the great taste of Coca-Cola® with a blast of cherry.'
	};

	drinkProduct5 = {
		productImage: 'drink-sprite.jpg',
		productName: 'Sprite®',
		productMessage: 'Unique Lymon (lemon-lime) flavor, clear, clean and crisp with no caffeine.'
	};

	drinkProduct6 = {
		productImage: 'drink-dasani-bottle-water.jpg',
		productName: 'Dasani® Bottle Water',
		productMessage: 'Fresh, crisp tasting water.'
	};

	drinkProduct7 = {
		productImage: 'drink-dr-pepper.jpg',
		productName: 'Dr. Pepper®',
		productMessage: 'Unique our own Dr. Pepper direct from the cold fridge'
	};

	drinkProduct8 = {
		productImage: 'drink-barqs-root-beer.jpg',
		productName: 'Barq\'s® Root Beer',
		productMessage: 'No one can resist Barq\'s® light fizz and spicy kick.'
	};

	drinkProduct9 = {
		productImage: 'drink-fanta-orange.jpg',
		productName: 'Fanta® Orange',
		productMessage: 'Exuberant tropical fun to release you from the everyday mundane.'
	};

	drinkProduct10 = {
		productImage: '',
		productName: 'Lemonade Bottle',
		productMessage: 'Made with the goodness of real lemons, Minute Maid® Lemonade is the quintessential refreshing beverage with the great taste of a simpler time.'
	};

	drinkProduct11 = {
		productImage: '',
		productName: '16oz Can Monster Energy Drink',
		productMessage: 'Monster packs a powerful punch but has a smooth easy drinking flavor.'
	};

	var drinkProductList = [[drinkProduct1, drinkProduct2, drinkProduct3], [drinkProduct4, drinkProduct5, drinkProduct6], [drinkProduct7, drinkProduct8, drinkProduct9], [drinkProduct10, drinkProduct11]];
	$scope.drinkProductList = drinkProductList;
}]);
