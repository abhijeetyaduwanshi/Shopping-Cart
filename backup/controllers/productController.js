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
}]);
