var myApp = angular.module('myApp', []);
myApp.controller('productCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello world from the product controller");

	product1 = {
		productName: 'Popular Items',
		productMessage: 'No time to waste? Choose a meal and head stright for checkout.'
	};

 	product2 = {
		productName: 'Coupons',
		productMessage: 'Find the perfect hot online deal.'
	};

	product3 = {
		productName: 'Build Your Own Pizza',
		productMessage: 'Watch the pizza of your wildest dreams come to life.'
	};

	product4 = {
		productName: 'Specialty Pizzas',
		productMessage: 'Enjoy one of our chef-inspired pizza combinations.'
	};

	product5 = {
		productName: 'Pasta',
		productMessage: 'Prepared to order and baked to perfection.'
	};

	product6 = {
		productName: 'Oven Baked Sandwiches',
		productMessage: 'All on artisan bread with premium ingredients and baked to perfection.'
	};

	product7 = {
		productName: 'Chicken',
		productMessage: 'Specialty Chicken, Wings, and Boneless Chicken in a selection of bold flavors.'
	};

	product8 = {
		productName: 'Sides',
		productMessage: 'Complement your meal and your appetite.'
	};

	product9 = {
		productName: 'Drinks',
		productMessage: 'Quench your thirst.'
	};

	product10 = {
		productName: 'Desserts',
		productMessage: 'Satisfy your sweet tooth.'
	};

 	var productList = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10];
	$scope.productList = productList;

	popularItemsProduct1 = {
		productName: 'Large (14") Hand Tossed Pizza'
	};

	popularItemsProduct2 = {
		productName: 'Large (14") Hand Tossed Pizza Whole: Pepperoni'
	};

	popularItemsProduct3 = {
		productName: 'Medium (12") Hand Tossed Pizza Whole: Ham, Pinapple'
	};

	popularItemsProduct4 = {
		productName: 'Medium (12") Hand Tossed Pizza Whole: Mashrooms, Pepperoni'
	};

	popularItemsProduct5 = {
		productName: 'Medium (12") Hand Tossed Pacific Veggie'
	};

	popularItemsProduct6 = {
		productName: 'Chicken Bacon Ranch Sandwich'
	};

	popularItemsProduct7 = {
		productName: 'Chicken Alfredo Pasta'
	};

	popularItemsProduct8 = {
		productName: '8-Piece BBQ Wings (1) Ranch'
	};

	popularItemsProduct9 = {
		productName: 'Chocolate Lava Crunch Cakes'
	};

 	var popularItemsProductList = [[popularItemsProduct1, popularItemsProduct2, popularItemsProduct3, popularItemsProduct4, popularItemsProduct5], [popularItemsProduct6, popularItemsProduct7, popularItemsProduct8, popularItemsProduct9]];
	$scope.popularItemsProductList = popularItemsProductList;

	specialtyPizzasProduct1 = {
		productName: 'ExtravaganZZa™',
		productMessage: 'Pepperoni, ham, Italian sausage, beef, fresh onions, fresh green peppers, fresh mushrooms and black olives, all sandwiched between two layers of cheese made with 100% real mozzarella.'
	};

	specialtyPizzasProduct2 = {
		productName: 'MeatZZa™',
		productMessage: 'Pepperoni, ham, Italian sausage and beef, all sandwiched between two layers of cheese made with 100% real mozzarella.'
	};

	specialtyPizzasProduct3 = {
		productName: 'Philly Cheese Steak',
		productMessage: 'Tender slices of steak, fresh onions, fresh green peppers, fresh mushrooms, provolone and American cheese.'
	};

	specialtyPizzasProduct4 = {
		productName: 'Pacific Veggie',
		productMessage: 'Roasted red peppers, fresh baby spinach, fresh onions, fresh mushrooms, tomatoes, black olives, feta, provolone, cheese made with 100% real mozzarella and sprinkled with a garlic herb seasoning.'
	};

	specialtyPizzasProduct5 = {
		productName: 'Honolulu Hawaiian',
		productMessage: 'Sliced ham, smoked bacon, pineapple, roasted red peppers, provolone and cheese made with 100% real mozzarella.'
	};

	specialtyPizzasProduct6 = {
		productName: 'Deluxe',
		productMessage: 'Pepperoni, Italian sausage, fresh green peppers, fresh mushrooms, fresh onions and cheese made with 100% real mozzarella.'
	};

	specialtyPizzasProduct7 = {
		productName: 'Cali Chicken Bacon Ranch',
		productMessage: 'Grilled chicken breast, garlic Parmesan white sauce, smoked bacon, tomatoes, provolone and cheese made with 100% real mozzarella.'
	};

	specialtyPizzasProduct8 = {
		productName: 'Buffalo Chicken',
		productMessage: 'Grilled chicken breast, fresh onions, provolone, American cheese, cheddar, cheese made with 100% real mozzarella and drizzled with a hot sauce.'
	};

	specialtyPizzasProduct9 = {
		productName: 'Ultimate Pepperoni',
		productMessage: 'Two layers of pepperoni sandwiched between provolone, Parmesan-Asiago and cheese made with 100% real mozzarella then sprinkled with oregano.'
	};

	specialtyPizzasProduct10 = {
		productName: 'Memphis BBQ Chicken',
		productMessage: 'Grilled chicken breast, BBQ sauce, fresh onions, cheddar, provolone and cheese made with 100% real mozzarella.'
	};

	specialtyPizzasProduct11 = {
		productName: 'Wisconsin 6 Cheese',
		productMessage: 'Feta, provolone, cheddar, Parmesan-Asiago, cheese made with 100% real mozzarella and sprinkled with oregano.'
	};

	specialtyPizzasProduct12 = {
		productName: 'Spinach & Feta',
		productMessage: 'Creamy Alfredo sauce, fresh spinach, fresh onions, feta, Parmesan-Asiago, provolone and cheese made with 100% real mozzarella.'
	};

	var specialtyPizzasProductList = [[specialtyPizzasProduct1, specialtyPizzasProduct2, specialtyPizzasProduct3, specialtyPizzasProduct4], [specialtyPizzasProduct5, specialtyPizzasProduct6, specialtyPizzasProduct7, specialtyPizzasProduct8], [specialtyPizzasProduct9, specialtyPizzasProduct10, specialtyPizzasProduct11, specialtyPizzasProduct12]];
	$scope.specialtyPizzasProductList = specialtyPizzasProductList;

	pastaProduct1 = {
		productName: 'Chicken Alfredo',
		productMessage: 'Try our savory Chicken Alfredo Pasta. Grilled chicken breast and creamy Alfredo sauce is mixed with penne pasta and baked to creamy perfection.'
	};

	pastaProduct2 = {
		productName: 'Italian Sausage Marinara',
		productMessage: 'Penne pasta baked in a zesty tomato basil marinara sauce with Italian sausage, a blend of Italian seasonings and provolone cheese.'
	};

	pastaProduct3 = {
		productName: 'Chicken Carbonara',
		productMessage: 'Taste the delectable blend of flavorful grilled chicken breast, smoked bacon, fresh onions, and fresh mushrooms mixed with penne pasta. Baked to perfection with rich Alfredo sauce.'
	};

	pastaProduct4 = {
		productName: 'Pasta Primavera',
		productMessage: 'Fresh baby spinach, diced tomatoes, fresh mushrooms and fresh onions, mixed with penne pasta and baked with a creamy Alfredo sauce.'
	};

	pastaProduct5 = {
		productName: 'Build Your Own Pasta',
		productMessage: 'Choose a sauce and up to 3 ingredients from more than a dozen meat or vegetable toppings.'
	};

	var pastaProductList = [[pastaProduct1, pastaProduct2, pastaProduct3, pastaProduct4], [pastaProduct5]];
	$scope.pastaProductList = pastaProductList;

	sandwichProduct1 = {
		productName: 'Buffalo Chicken',
		productMessage: 'Grilled chicken breast, creamy blue cheese sauce, fresh onions, hot sauce, cheddar and provolone cheeses. On artisan bread and baked to a golden brown.'
	};

	sandwichProduct2 = {
		productName: 'Chicken Habanero',
		productMessage: 'Grilled chicken breast, pineapple, jalapeños, sweet mango habanero sauce, provolone and cheddar cheeses. On artisan bread and baked to a golden brown.'
	};

	sandwichProduct3 = {
		productName: 'Mediterranean Veggie',
		productMessage: 'Roasted red peppers, banana peppers, diced tomatoes, fresh baby spinach, fresh onions, feta, provolone and American cheese. On artisan bread and baked to a golden brown.'
	};

	sandwichProduct4 = {
		productName: 'Philly Cheese Steak',
		productMessage: 'Experience deliciously tender slices of steak, American and provolone cheeses, fresh onions, fresh green peppers and fresh mushrooms placed on artisan bread and baked to golden brown perfection.'
	};

	sandwichProduct5 = {
		productName: 'Chicken Bacon Ranch',
		productMessage: 'Enjoy our flavorful grilled chicken breast topped with smoked bacon, creamy ranch and provolone cheese on artisan bread baked to golden brown perfection.'
	};

	sandwichProduct6 = {
		productName: 'Italian',
		productMessage: 'Pepperoni, salami, and ham topped with banana peppers, fresh green peppers, fresh onions, and provolone cheese. On artisan bread and baked to a golden brown.'
	};

	sandwichProduct7 = {
		productName: 'Chicken Parm',
		productMessage: 'Grilled chicken breast, tomato basil marinara, Parmesan-Asiago and provolone cheese. On artisan bread and baked to a golden brown.'
	};

	var sandwichProductList = [[sandwichProduct1, sandwichProduct2, sandwichProduct3, sandwichProduct4], [sandwichProduct5, sandwichProduct6, sandwichProduct7]];
	$scope.sandwichProductList = sandwichProductList;

	chickenProduct1 = {
		productName: 'Specialty Chicken – Crispy Bacon & Tomato',
		productMessage: 'Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with garlic parmesan white sauce, a blend of cheese made with mozzarella and cheddar, crispy bacon and tomato.'
	};

	chickenProduct2 = {
		productName: 'Specialty Chicken – Classic Hot Buffalo',
		productMessage: 'Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with classic hot buffalo sauce, ranch, a blend of cheese made with mozzarella and cheddar, and feta.'
	};

	chickenProduct3 = {
		productName: 'Specialty Chicken – Spicy Jalapeno - Pineapple',
		productMessage: 'Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with sweet and spicy mango-habanero sauce, a blend of cheese made with mozzarella and cheddar, jalapeno and pineapple.'
	};

	chickenProduct4 = {
		productName: 'Specialty Chicken – Sweet BBQ Bacon',
		productMessage: 'Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with sweet and smoky BBQ sauce, a blend of cheese made with mozzarella and cheddar, and crispy bacon.'
	};

	chickenProduct5 = {
		productName: 'Boneless Chicken',
		productMessage: 'Lightly breaded with savory herbs, made with 100% whole white breast meat. Customize with your choice of dipping sauce: Sweet Mango Habanero, BBQ, Kicker Hot Sauce, Blue Cheese or Ranch.'
	};

	chickenProduct6 = {
		productName: 'Hot Wings',
		productMessage: 'Marinated and oven-baked and then smothered in Hot Sauce. Customize with your choice of dipping sauce: Sweet Mango Habanero, BBQ, Kicker Hot Sauce, Blue Cheese, or Ranch'
	};

	chickenProduct7 = {
		productName: 'BBQ Wings',
		productMessage: 'Marinated and oven-baked and then smothered in BBQ Sauce. Customize with your choice of dipping sauce: Sweet Mango Habanero, BBQ, Kicker Hot Sauce, Blue Cheese, or Ranch'
	};

	chickenProduct8 = {
		productName: 'Plain Wings',
		productMessage: 'Oven-baked to perfection. Customize with your choice of dipping sauce: Sweet Mango Habanero, BBQ, Kicker Hot Sauce, Blue Cheese, or Ranch'
	};

	chickenProduct9 = {
		productName: 'Sweet Mango Habanero Wings',
		productMessage: 'Marinated and oven-baked and then smothered in Sweet Mango Habanero Sauce. Customize with your choice of dipping sauce: Sweet Mango Habanero, BBQ, Kicker Hot Sauce, Blue Cheese, or Ranch'
	};

	var chickenProductList = [[chickenProduct1, chickenProduct2, chickenProduct3, chickenProduct4], [chickenProduct5, chickenProduct6, chickenProduct7, chickenProduct8], [chickenProduct9]];
	$scope.chickenProductList = chickenProductList;

	sidesBreadProduct1 = {
		productName: 'Parmesan Bread Twists',
		productMessage: 'Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with garlic and Parmesan cheese seasoning, and sprinkled with more Parmesan. Served with a side of marinara sauce for dipping.'
	};

	sidesBreadProduct2 = {
		productName: 'Garlic Bread Twists',
		productMessage: 'Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with buttery garlic and Parmesan cheese seasoning. Served with a side of marinara sauce for dipping.'
	};

	sidesBreadProduct3 = {
		productName: 'Stuffed Cheesy Bread',
		productMessage: 'Our oven-baked breadsticks are generously stuffed and covered with a blend of 100% real mozzarella and cheddar cheeses then seasoned with a touch of garlic. Add marinara or your favorite dipping cup for an additional charge.'
	};

	sidesBreadProduct4 = {
		productName: 'Stuffed Cheesy Bread with Spinach & Feta',
		productMessage: 'Our oven-baked breadsticks are stuffed with cheese, fresh spinach and Feta cheese - covered in a blend of cheese made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.'
	};

	sidesBreadProduct5 = {
		productName: 'Stuffed Cheesy Bread with Bacon & Jalapeno',
		productMessage: 'Our oven-baked breadsticks are stuffed with cheese, smoked bacon & jalapeno peppers - covered in a blend of cheeses; made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.'
	};

	sidesBreadProduct6 = {
		productName: 'Parmesan Bread Bites',
		productMessage: 'Oven-baked bread bites handmade from fresh buttery-tasting dough and seasoned with garlic and Parmesan. Available in 16-piece or 32-piece orders. Add marinara or your favorite dipping cup for an additional charge.'
	};

	var sidesBreadProductList = [[sidesBreadProduct1, sidesBreadProduct2, sidesBreadProduct3, sidesBreadProduct4], [sidesBreadProduct5, sidesBreadProduct6]];
	$scope.sidesBreadProductList = sidesBreadProductList;

	sidesSaladProduct1 = {
		productName: 'Classic Garden',
		productMessage: 'A crisp and colorful combination of grape tomatoes, red onion, carrots, red cabbage, cheddar cheese and brioche garlic croutons, all atop a blend of romaine and iceberg lettuce.'
	};

	sidesSaladProduct2 = {
		productName: 'Chicken Caesar',
		productMessage: 'The makings of a classic: roasted white meat chicken, Parmesan cheese and brioche garlic croutons, all atop a blend of romaine and iceberg lettuce.'
	};

	var sidesSaladProductList = [[sidesSaladProduct1, sidesSaladProduct2]];
	$scope.sidesSaladProductList = sidesSaladProductList;

	sidesExtraProduct1 = {
		productName: 'Parmesan Cheese Packets',
		productMessage: 'Grated Parmesan cheese packets'
	}

	sidesExtraProduct2 = {
		productName: 'Red Pepper Packets',
		productMessage: 'Crushed red pepper flake packets'
	}

	sidesExtraProduct3 = {
		productName: 'Kicker Hot Sauce',
		productMessage: 'Domino\'s own spicy Buffalo sauce'
	}

	sidesExtraProduct4 = {
		productName: 'Sweet Mango Habanero Sauce',
		productMessage: 'A perfect blend of sweet and spicy in one sauce'
	}

	sidesExtraProduct5 = {
		productName: 'BBQ Sauce',
		productMessage: 'A smoky BBQ sauce with bold flavor'
	}

	sidesExtraProduct6 = {
		productName: 'Ranch',
		productMessage: 'A creamy buttermilk ranch dressing with hints of garlic and onion'
	}

	sidesExtraProduct7 = {
		productName: 'Blue Cheese',
		productMessage: 'A creamy dressing with bits of aged blue cheese'
	}

	sidesExtraProduct8 = {
		productName: 'Garlic Dipping Sauce',
		productMessage: 'A buttery garlic sauce'
	}

	sidesExtraProduct9 = {
		productName: 'Icing Dipping Sauce',
		productMessage: 'A thick sweet icing with a hint of vanilla'
	}

	sidesExtraProduct10 = {
		productName: 'Marinara Dipping Sauce',
		productMessage: 'A sweet tomato sauce blended with garlic, basil and oregano'
	}

	sidesExtraProduct11 = {
		productName: 'Caesar Dressing',
		productMessage: 'A savory dressing with a combination of garlic, anchovy and subtle notes of cheese.'
	}

	sidesExtraProduct12 = {
		productName: 'Italian Dressing',
		productMessage: 'A classic dressing flavored with red bell pepper, a touch of garlic and spices.'
	}

	sidesExtraProduct13 = {
		productName: 'Ranch Dressing',
		productMessage: 'A creamy, flavorful dressing with a blend of buttermilk, garlic, onion and spices.'
	}

	sidesExtraProduct14 = {
		productName: 'Balsamic',
		productMessage: 'A light dressing with a blend of balsamic vinegar, oil and garlic.'
	}

	var sidesExtraProductList = [[sidesExtraProduct1, sidesExtraProduct2, sidesExtraProduct3, sidesExtraProduct4], [sidesExtraProduct5, sidesExtraProduct6, sidesExtraProduct7, sidesExtraProduct8], [sidesExtraProduct9, sidesExtraProduct10, sidesExtraProduct11, sidesExtraProduct12], [sidesExtraProduct13, sidesExtraProduct14]];
	$scope.sidesExtraProductList = sidesExtraProductList;

	drinkProduct1 = {
		productName: 'Coke®',
		productMessage: 'The authentic cola sensation that is a refreshing part of sharing life\'s enjoyable moments.'
	};

	drinkProduct2 = {
		productName: 'Coca-Cola Zero Sugar',
		productMessage: 'Real Coca-Cola® Taste! Now you can cut back on sugar without sacrificing the great Coca-Cola taste you know and love. Coca-Cola Zero Sugar offers you real Coca-Cola taste and uplifting refreshment without any sugar.'
	};

	drinkProduct3 = {
		productName: 'Diet Coke®',
		productMessage: 'Beautifully balanced adult cola taste in a no calorie beverage.'
	};

	drinkProduct4 = {
		productName: 'Cherry Coke®',
		productMessage: 'Combines the great taste of Coca-Cola® with a blast of cherry.'
	};

	drinkProduct5 = {
		productName: 'Sprite®',
		productMessage: 'Unique Lymon (lemon-lime) flavor, clear, clean and crisp with no caffeine.'
	};

	drinkProduct6 = {
		productName: 'Dasani® Bottle Water',
		productMessage: 'Fresh, crisp tasting water.'
	};

	drinkProduct7 = {
		productName: 'Dr. Pepper®',
		productMessage: 'Unique our own Dr. Pepper direct from the cold fridge'
	};

	drinkProduct8 = {
		productName: 'Barq\'s® Root Beer',
		productMessage: 'No one can resist Barq\'s® light fizz and spicy kick.'
	};

	drinkProduct9 = {
		productName: 'Fanta® Orange',
		productMessage: 'Exuberant tropical fun to release you from the everyday mundane.'
	};

	drinkProduct10 = {
		productName: 'Lemonade Bottle',
		productMessage: 'Made with the goodness of real lemons, Minute Maid® Lemonade is the quintessential refreshing beverage with the great taste of a simpler time.'
	};

	drinkProduct11 = {
		productName: '16oz Can Monster Energy Drink',
		productMessage: 'Monster packs a powerful punch but has a smooth easy drinking flavor.'
	};

	var drinkProductList = [[drinkProduct1, drinkProduct2, drinkProduct3, drinkProduct4], [drinkProduct5, drinkProduct6, drinkProduct7, drinkProduct8], [drinkProduct9, drinkProduct10, drinkProduct11]];
	$scope.drinkProductList = drinkProductList;

	dessertProduct1 = {
		productName: 'Cinnamon Bread Twists',
		productMessage: 'Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with a perfect blend of cinnamon and sugar, and served with a side of sweet icing for dipping or drizzling.'
	};

	dessertProduct2 = {
		productName: 'Domino\'s Marbled Cookie Brownie™',
		productMessage: 'Satisfy your sweet tooth! Taste the decadent blend of gooey milk chocolate chunk cookie and delicious fudge brownie. Oven-baked to perfection and cut into 9 pieces - this dessert is perfect to share with the whole group.'
	};

	dessertProduct3 = {
		productName: 'Chocolate Lava Crunch Cakes',
		productMessage: 'Indulge in two delectable oven-baked chocolate cakes with molten chocolate fudge on the inside. Perfectly topped with a dash of powdered sugar.'
	};

	var dessertProductList = [[dessertProduct1, dessertProduct2, dessertProduct3]];
	$scope.dessertProductList = dessertProductList;
}]);
