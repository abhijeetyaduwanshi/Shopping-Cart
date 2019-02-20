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

	specialtyPizzaProduct1 = {
		productImage: 'specialty-pizza-extravaganzza.jpg',
		productName: 'ExtravaganZZa',
		productMessage: 'Pepperoni, ham, Italian sausage, beef, fresh onions, fresh green peppers, fresh mushrooms and black olives, all sandwiched between two layers of cheese made with 100% real mozzarella.'
	};

	specialtyPizzaProduct2 = {
		productImage: 'specialty-pizza-meatzza.jpg',
		productName: 'MeatZZa',
		productMessage: 'Pepperoni, ham, Italian sausage and beef, all sandwiched between two layers of cheese made with 100% real mozzarella.'
	};

	specialtyPizzaProduct3 = {
		productImage: 'specialty-pizza-philly-cheese-steak.jpg',
		productName: 'Philly Cheese Steak',
		productMessage: 'Tender slices of steak, fresh onions, fresh green peppers, fresh mushrooms, provolone and American cheese.'
	};

	specialtyPizzaProduct4 = {
		productImage: 'specialty-pizza-pacific-veggie.jpg',
		productName: 'Pacific Veggie',
		productMessage: 'Roasted red peppers, fresh baby spinach, fresh onions, fresh mushrooms, tomatoes, black olives, feta, provolone, cheese made with 100% real mozzarella and sprinkled with a garlic herb seasoning.'
	};

	specialtyPizzaProduct5 = {
		productImage: 'specialty-pizza-honolulu-hawaiian.jpg',
		productName: 'Honolulu Hawaiian',
		productMessage: 'Sliced ham, smoked bacon, pineapple, roasted red peppers, provolone and cheese made with 100% real mozzarella.'
	};

	specialtyPizzaProduct6 = {
		productImage: 'specialty-pizza-deluxe.jpg',
		productName: 'Deluxe',
		productMessage: 'Pepperoni, Italian sausage, fresh green peppers, fresh mushrooms, fresh onions and cheese made with 100% real mozzarella.'
	};

	specialtyPizzaProduct7 = {
		productImage: 'specialty-pizza-cali-chicken-bacon-ranch.jpg',
		productName: 'Cali Chicken Bacon Ranch',
		productMessage: 'Grilled chicken breast, garlic Parmesan white sauce, smoked bacon, tomatoes, provolone and cheese made with 100% real mozzarella.'
	};

	specialtyPizzaProduct8 = {
		productImage: 'specialty-pizza-buffalo-chicken.jpg',
		productName: 'Buffalo Chicken',
		productMessage: 'Grilled chicken breast, fresh onions, provolone, American cheese, cheddar, cheese made with 100% real mozzarella and drizzled with a hot sauce.'
	};

	specialtyPizzaProduct9 = {
		productImage: 'specialty-pizza-ultimate-pepperoni.jpg',
		productName: 'Ultimate Pepperoni',
		productMessage: 'Two layers of pepperoni sandwiched between provolone, Parmesan-Asiago and cheese made with 100% real mozzarella then sprinkled with oregano.'
	};

	specialtyPizzaProduct10 = {
		productImage: 'specialty-pizza-memphis-bbq-chicken.jpg',
		productName: 'Memphis BBQ Chicken',
		productMessage: 'Grilled chicken breast, BBQ sauce, fresh onions, cheddar, provolone and cheese made with 100% real mozzarella.'
	};

	specialtyPizzaProduct11 = {
		productImage: 'specialty-pizza-wisconsin-6-cheese.jpg',
		productName: 'Wisconsin 6 Cheese',
		productMessage: 'Feta, provolone, cheddar, Parmesan-Asiago, cheese made with 100% real mozzarella and sprinkled with oregano.'
	};

	specialtyPizzaProduct12 = {
		productImage: 'specialty-pizza-spinach-and-feta.jpg',
		productName: 'Spinach & Feta',
		productMessage: 'Creamy Alfredo sauce, fresh spinach, fresh onions, feta, Parmesan-Asiago, provolone and cheese made with 100% real mozzarella.'
	};

	var specialtyPizzaProductList = [[specialtyPizzaProduct1, specialtyPizzaProduct2, specialtyPizzaProduct3], [specialtyPizzaProduct4, specialtyPizzaProduct5, specialtyPizzaProduct6], [specialtyPizzaProduct7, specialtyPizzaProduct8, specialtyPizzaProduct9], [specialtyPizzaProduct10, specialtyPizzaProduct11, specialtyPizzaProduct12]];
	$scope.specialtyPizzaProductList = specialtyPizzaProductList;

	pastaProduct1 = {
		productImage: 'pasta-chicken-alfredo.jpg',
		productName: 'Chicken Alfredo',
		productMessage: 'Try our savory Chicken Alfredo Pasta. Grilled chicken breast and creamy Alfredo sauce is mixed with penne pasta and baked to creamy perfection.'
	};

	pastaProduct2 = {
		productImage: 'pasta-italian-sausage-marinara.jpg',
		productName: 'Italian Sausage Marinara',
		productMessage: 'Penne pasta baked in a zesty tomato basil marinara sauce with Italian sausage, a blend of Italian seasonings and provolone cheese.'
	};

	pastaProduct3 = {
		productImage: 'pasta-chicken-carbonara.jpg',
		productName: 'Chicken Carbonara',
		productMessage: 'Taste the delectable blend of flavorful grilled chicken breast, smoked bacon, fresh onions, and fresh mushrooms mixed with penne pasta. Baked to perfection with rich Alfredo sauce.'
	};

	pastaProduct4 = {
		productImage: 'pasta-pasta-primavera.jpg',
		productName: 'Pasta Primavera',
		productMessage: 'Fresh baby spinach, diced tomatoes, fresh mushrooms and fresh onions, mixed with penne pasta and baked with a creamy Alfredo sauce.'
	};

	pastaProduct5 = {
		productImage: 'pasta-build-your-own-pasta.jpg',
		productName: 'Build Your Own Pasta',
		productMessage: 'Choose a sauce and up to 3 ingredients from more than a dozen meat or vegetable toppings.'
	};

	var pastaProductList = [[pastaProduct1, pastaProduct2, pastaProduct3], [pastaProduct4, pastaProduct5]];
	$scope.pastaProductList = pastaProductList;

	sandwichProduct1 = {
		productImage: 'sandwich-buffalo-chicken.jpg',
		productName: 'Buffalo Chicken',
		productMessage: 'Grilled chicken breast, creamy blue cheese sauce, fresh onions, hot sauce, cheddar and provolone cheeses. On artisan bread and baked to a golden brown.'
	};

	sandwichProduct2 = {
		productImage: 'sandwich-chicken-habanero.jpg',
		productName: 'Chicken Habanero',
		productMessage: 'Grilled chicken breast, pineapple, jalapeños, sweet mango habanero sauce, provolone and cheddar cheeses. On artisan bread and baked to a golden brown.'
	};

	sandwichProduct3 = {
		productImage: 'sandwich-mediterranean-veggie.jpg',
		productName: 'Mediterranean Veggie',
		productMessage: 'Roasted red peppers, banana peppers, diced tomatoes, fresh baby spinach, fresh onions, feta, provolone and American cheese. On artisan bread and baked to a golden brown.'
	};

	sandwichProduct4 = {
		productImage: 'sandwich-philly-cheese-steak.jpg',
		productName: 'Philly Cheese Steak',
		productMessage: 'Experience deliciously tender slices of steak, American and provolone cheeses, fresh onions, fresh green peppers and fresh mushrooms placed on artisan bread and baked to golden brown perfection.'
	};

	sandwichProduct5 = {
		productImage: 'sandwich-chicken-bacon-ranch.jpg',
		productName: 'Chicken Bacon Ranch',
		productMessage: 'Enjoy our flavorful grilled chicken breast topped with smoked bacon, creamy ranch and provolone cheese on artisan bread baked to golden brown perfection.'
	};

	sandwichProduct6 = {
		productImage: 'sandwich-italian.jpg',
		productName: 'Italian',
		productMessage: 'Pepperoni, salami, and ham topped with banana peppers, fresh green peppers, fresh onions, and provolone cheese. On artisan bread and baked to a golden brown.'
	};

	sandwichProduct7 = {
		productImage: 'sandwich-chicken-parm.jpg',
		productName: 'Chicken Parm',
		productMessage: 'Grilled chicken breast, tomato basil marinara, Parmesan-Asiago and provolone cheese. On artisan bread and baked to a golden brown.'
	};

	var sandwichProductList = [[sandwichProduct1, sandwichProduct2, sandwichProduct3], [sandwichProduct4, sandwichProduct5, sandwichProduct6], [sandwichProduct7]];
	$scope.sandwichProductList = sandwichProductList;

	chickenProduct1 = {
		productImage: 'chicken-specialty-chicken-crispy-bacon-and-tomato.jpg',
		productName: 'Specialty Chicken - Crispy Bacon & Tomato',
		productMessage: 'Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with garlic parmesan white sauce, a blend of cheese made with mozzarella and cheddar, crispy bacon and tomato.'
	};

	chickenProduct2 = {
		productImage: 'chicken-specialty-chicken-classic-hot-buffalo.jpg',
		productName: 'Specialty Chicken - Classic Hot Buffalo',
		productMessage: 'Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with classic hot buffalo sauce, ranch, a blend of cheese made with mozzarella and cheddar, and feta.'
	};

	chickenProduct3 = {
		productImage: 'chicken-specialty-chicken-spicy-jalapeno-pineapple.jpg',
		productName: 'Specialty Chicken - Spicy Jalapeno - Pineapple',
		productMessage: 'Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with sweet and spicy mango-habanero sauce, a blend of cheese made with mozzarella and cheddar, jalapeno and pineapple.'
	};

	chickenProduct4 = {
		productImage: 'chicken-specialty-chicken-sweet-bbq-bacon.jpg',
		productName: 'Specialty Chicken - Sweet BBQ Bacon',
		productMessage: 'Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with sweet and smoky BBQ sauce, a blend of cheese made with mozzarella and cheddar, and crispy bacon.'
	};

	chickenProduct5 = {
		productImage: 'chicken-boneless-chicken.jpg',
		productName: 'Boneless Chicken',
		productMessage: 'Lightly breaded with savory herbs, made with 100% whole white breast meat. Customize with your choice of dipping sauce: Sweet Mango Habanero, BBQ, Kicker Hot Sauce, Blue Cheese or Ranch.'
	};

	chickenProduct6 = {
		productImage: 'chicken-hot-wings.jpg',
		productName: 'Hot Wings',
		productMessage: 'Marinated and oven-baked and then smothered in Hot Sauce. Customize with your choice of dipping sauce: Sweet Mango Habanero, BBQ, Kicker Hot Sauce, Blue Cheese, or Ranch'
	};

	chickenProduct7 = {
		productImage: 'chicken-bbq-wings.jpg',
		productName: 'BBQ Wings',
		productMessage: 'Marinated and oven-baked and then smothered in BBQ Sauce. Customize with your choice of dipping sauce: Sweet Mango Habanero, BBQ, Kicker Hot Sauce, Blue Cheese, or Ranch'
	};

	chickenProduct8 = {
		productImage: 'chicken-plain-wings.jpg',
		productName: 'Plain Wings',
		productMessage: 'Oven-baked to perfection. Customize with your choice of dipping sauce: Sweet Mango Habanero, BBQ, Kicker Hot Sauce, Blue Cheese, or Ranch'
	};

	chickenProduct9 = {
		productImage: 'chicken-sweet-mango-habanero-wings.jpg',
		productName: 'Sweet Mango Habanero Wings',
		productMessage: 'Marinated and oven-baked and then smothered in Sweet Mango Habanero Sauce. Customize with your choice of dipping sauce: Sweet Mango Habanero, BBQ, Kicker Hot Sauce, Blue Cheese, or Ranch'
	};

	var chickenProductList = [[chickenProduct1, chickenProduct2, chickenProduct3], [chickenProduct4, chickenProduct5, chickenProduct6], [chickenProduct7, chickenProduct8, chickenProduct9]];
	$scope.chickenProductList = chickenProductList;

	sidesBreadProduct1 = {
		productImage: 'sides-bread-parmesan-bread-bites.jpg',
		productName: 'Parmesan Bread Twists',
		productMessage: 'Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with garlic and Parmesan cheese seasoning, and sprinkled with more Parmesan. Served with a side of marinara sauce for dipping.'
	};

	sidesBreadProduct2 = {
		productImage: 'sides-bread-garlic-bread-twists.jpg',
		productName: 'Garlic Bread Twists',
		productMessage: 'Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with buttery garlic and Parmesan cheese seasoning. Served with a side of marinara sauce for dipping.'
	};

	sidesBreadProduct3 = {
		productImage: 'sides-bread-stuffed-cheesy-bread.jpg',
		productName: 'Stuffed Cheesy Bread',
		productMessage: 'Our oven-baked breadsticks are generously stuffed and covered with a blend of 100% real mozzarella and cheddar cheeses then seasoned with a touch of garlic. Add marinara or your favorite dipping cup for an additional charge.'
	};

	sidesBreadProduct4 = {
		productImage: 'sides-bread-stuffed-cheesy-bread-with-spinach-and-feta.jpg',
		productName: 'Stuffed Cheesy Bread with Spinach & Feta',
		productMessage: 'Our oven-baked breadsticks are stuffed with cheese, fresh spinach and Feta cheese - covered in a blend of cheese made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.'
	};

	sidesBreadProduct5 = {
		productImage: 'sides-bread-stuffed-cheesy-bread-with-bacon-and-jalapeno.jpg',
		productName: 'Stuffed Cheesy Bread with Bacon & Jalapeno',
		productMessage: 'Our oven-baked breadsticks are stuffed with cheese, smoked bacon & jalapeno peppers - covered in a blend of cheeses; made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.'
	};

	sidesBreadProduct6 = {
		productImage: 'sides-bread-parmesan-bread-bites.jpg',
		productName: 'Parmesan Bread Bites',
		productMessage: 'Oven-baked bread bites handmade from fresh buttery-tasting dough and seasoned with garlic and Parmesan. Available in 16-piece or 32-piece orders. Add marinara or your favorite dipping cup for an additional charge.'
	};

	var sidesBreadProductList = [[sidesBreadProduct1, sidesBreadProduct2, sidesBreadProduct3], [sidesBreadProduct4, sidesBreadProduct5, sidesBreadProduct6]];
	$scope.sidesBreadProductList = sidesBreadProductList;

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

	dessertProduct1 = {
		productImage: 'dessert-cinnamon-bread-twists.jpg',
		productName: 'Cinnamon Bread Twists',
		productMessage: 'Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with a perfect blend of cinnamon and sugar, and served with a side of sweet icing for dipping or drizzling.'
	};

	dessertProduct2 = {
		productImage: 'dessert-dominos-marbled-cookie-brownie.jpg',
		productName: 'Domino\'s Marbled Cookie Brownie™',
		productMessage: 'Satisfy your sweet tooth! Taste the decadent blend of gooey milk chocolate chunk cookie and delicious fudge brownie. Oven-baked to perfection and cut into 9 pieces - this dessert is perfect to share with the whole group.'
	};

	dessertProduct3 = {
		productImage: 'dessert-chocolate-lava-crunch-cakes.jpg',
		productName: 'Chocolate Lava Crunch Cakes',
		productMessage: 'Indulge in two delectable oven-baked chocolate cakes with molten chocolate fudge on the inside. Perfectly topped with a dash of powdered sugar.'
	};

	var dessertProductList = [[dessertProduct1, dessertProduct2, dessertProduct3]];
	$scope.dessertProductList = dessertProductList;
}]);
