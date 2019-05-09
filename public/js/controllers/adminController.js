var controller = angular.module('shoppingCartApp.adminController', []);
controller.controller('adminCtrl', ['$scope', '$http', function($scope, $http) {
	// console.log("Hello world from the admin controller");

	// this method is to get the category data
	var refresh = function() {
		$http({
			method: 'GET',
			url: '/Admin'
		}).then(function success(response) {
			// console.log("I got the data I requested");
			$scope.categoryItemsList = response.data;
		}, function errorCallback(error) {
			// TODO: add error page code here
		});
	};
	refresh();

	// this function is to prepare the categoryId from categoryName
	var categoryIdValueFunction = function(categoryName) {
		var categoryIdValue = "category-";
		if (categoryName) {
			var categoryNameWords = categoryName.split(" ");
			categoryIdValue = categoryIdValue.concat(categoryNameWords[0].toLowerCase());
			for (var i = 1, len = categoryNameWords.length; i < len; i++) {
				categoryIdValue = categoryIdValue.concat(categoryNameWords[i].charAt(0).toUpperCase() + categoryNameWords[i].slice(1));
			}
		}
		return categoryIdValue;
	};

	// this function is to prepare the categoryRoute from categoryName
	var categoryRouteValueFunction = function(categoryName) {
		var categoryRouteValue = "#!/";
		if (categoryName) {
			var categoryNameWords = categoryName.split(" ");
			for (var i = 0, len = categoryNameWords.length; i < len; i++) {
				categoryRouteValue = categoryRouteValue.concat(categoryNameWords[i].charAt(0).toUpperCase() + categoryNameWords[i].slice(1));
			}
		}
		return categoryRouteValue;
	};

	// this function is to prepare the categoryImgPath from categoryName
	var categoryImgPathValueFunction = function(categoryName) {
		var categoryImgPathValue = "images/categoryItems/";
		if (categoryName) {
			var categoryNameWords = categoryName.split(" ");
			for (var i = 0, len = categoryNameWords.length; i < len; i++) {
				categoryImgPathValue = categoryImgPathValue.concat(categoryNameWords[i].charAt(0).toLowerCase() + categoryNameWords[i].slice(1));
				if (i < len-1) {
					categoryImgPathValue = categoryImgPathValue.concat("-");
				}
			}
			categoryImgPathValue = categoryImgPathValue.concat(".png");
		}
		return categoryImgPathValue;
	};

	// this function is to properly formate the categoryName
	var categoryTitleValueFunction = function(categoryName) {
		var categoryTitleValue = "";
		if (categoryName) {
			var categoryNameWords = categoryName.split(" ");
			for (var i = 0, len = categoryNameWords.length; i < len; i++) {
				categoryTitleValue = categoryTitleValue.concat(categoryNameWords[i].charAt(0).toUpperCase() + categoryNameWords[i].slice(1));
				if (i < len-1) {
					categoryTitleValue = categoryTitleValue.concat(" ");
				}
			}
		}
		return categoryTitleValue;
	};

	// this function is to properly formate the categoryDescription
	var categoryDescriptionValueFunction = function(categoryDescription) {
		var categoryDescriptionValue = "";
		if (categoryDescription) {
			categoryDescriptionValue = categoryDescription.charAt(0).toUpperCase() + categoryDescription.slice(1);
			if (categoryDescription[categoryDescription.length -1] != ".") {
				categoryDescriptionValue = categoryDescriptionValue.concat(".");
			}
		}
		return categoryDescriptionValue;
	};

	// this method is to post the category data
	$scope.addCategoryItem = function() {
		var catItem = $scope.categoryItem;
		catItem.categoryId = categoryIdValueFunction(catItem.categoryTitle);
		catItem.categoryRoute = categoryRouteValueFunction(catItem.categoryTitle);
		catItem.categoryImage = categoryImgPathValueFunction(catItem.categoryTitle);
		catItem.categoryTitle = categoryTitleValueFunction(catItem.categoryTitle);
		catItem.categoryDescription = categoryDescriptionValueFunction(catItem.categoryDescription);
		// console.log(catItem);
		$http({
			method: 'POST',
			url: '/Admin',
			data: catItem
		}).then(function success(response) {
			// console.log(response);
			refresh();
			$scope.categoryItem = {};
		}, function errorCallback(error) {
			// TODO: add error page code here
		});
	};

	// this function is to view the details of a category item
	// params: id, of the category
	$scope.viewCategoryDetails = function(id) {
		// console.log(id);
		$http({
			method: 'GET',
			url: '/Admin/' + id
		}).then(function success(response) {
			// console.log(response);
			$scope.selectedCategoryItem = {};
			$scope.selectedCategoryItem = response.data[0];
		}, function errorCallback(error) {
			// TODO: add error page code here
		});
	};

	// this function is to delete category item
	// params: id, of the category
	$scope.removeCat = function(id) {
		// console.log("delete " + id);
		$http({
			method: 'DELETE',
			url: '/Admin/' + id
		}).then(function success(response) {
			// console.log(response);
			refresh();
		}, function errorCallback(error) {
			// TODO: add error page code here
		});
	};
}]);
