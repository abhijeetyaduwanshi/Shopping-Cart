var controller = angular.module('shoppingCartApp.breadsController', []);
controller.controller('breadsCtrl',['$scope', '$http', function($scope, $http) {
	console.log("Hello world from the breads controller");

	bread1 = {
		productImage: 'images/breads/bread-parmesanBreadTwists.jpg',
		productTitle: 'Parmesan Bread Twists',
		productDescription: 'Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with garlic and Parmesan cheese seasoning, and sprinkled with more Parmesan. Served with a side of marinara sauce for dipping.',
		productPrice: ''
	};

	bread2 = {
		productImage: 'images/breads/bread-garlicBreadTwists.jpg',
		productTitle: 'Garlic Bread Twists',
		productDescription: 'Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with buttery garlic and Parmesan cheese seasoning. Served with a side of marinara sauce for dipping.',
		productPrice: ''
	};

	bread3 = {
		productImage: 'images/breads/bread-stuffedCheesyBread.jpg',
		productTitle: 'Stuffed Cheesy Bread',
		productDescription: 'Our oven-baked breadsticks are generously stuffed and covered with a blend of 100% real mozzarella and cheddar cheeses then seasoned with a touch of garlic. Add marinara or your favorite dipping cup for an additional charge.',
		productPrice: ''
	};

	bread4 = {
		productImage: 'images/breads/bread-stuffedCheesyBreadWithSpinachAndFeta.jpg',
		productTitle: 'Stuffed Cheesy Bread with Spinach & Feta',
		productDescription: 'Our oven-baked breadsticks are stuffed with cheese, fresh spinach and Feta cheese - covered in a blend of cheese made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.',
		productPrice: ''
	};

	bread5 = {
		productImage: 'images/breads/bread-stuffedCheesyBreadWithBaconAndJalapeno.jpg',
		productTitle: 'Stuffed Cheesy Bread with Bacon & Jalapeno',
		productDescription: 'Our oven-baked breadsticks are stuffed with cheese, smoked bacon & jalapeno peppers - covered in a blend of cheeses; made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.',
		productPrice: ''
	};

	bread6 = {
		productImage: 'images/breads/bread-parmesanBreadBites.jpg',
		productTitle: 'Parmesan Bread Bites',
		productDescription: 'Oven-baked bread bites handmade from fresh buttery-tasting dough and seasoned with garlic and Parmesan. Available in 16-piece or 32-piece orders. Add marinara or your favorite dipping cup for an additional charge.',
		productPrice: ''
	};

	var products = [bread1, bread2, bread3, bread4, bread5, bread6];
	$scope.products = products;
}]);
