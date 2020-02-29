controller = angular.module('shoppingCartApp.adminController', []);
controller.controller('adminCtrl', ['$scope', '$http', function($scope, $http) {

    /**
     * get category data
     */
    const refresh = () => {
        $http({
            method: 'GET',
            url: '/admin'
        }).then(function success(response) {
            $scope.categoryItemsList = response.data;
        }, function errorCallback(error) {
            // TODO: add error page code here
        });
    };
    refresh();

    /**
     * prepare categoryId from categoryName
     * 
     * @param  {} categoryName, of the category
     */
    const categoryIdValueFunction = categoryName => {
        let categoryIdValue = "category-";
        if (categoryName) {
            const categoryNameWords = categoryName.split(" ");
            categoryIdValue = categoryIdValue.concat(categoryNameWords[0].toLowerCase());
            for (let i = 1, len = categoryNameWords.length; i < len; i++) {
                categoryIdValue = categoryIdValue.concat(categoryNameWords[i].charAt(0).toUpperCase() + categoryNameWords[i].slice(1));
            }
        }
        return categoryIdValue;
    };

    /**
     * prepare categoryRoute from categoryName
     * 
     * @param  {} categoryName, of the category
     */
    const categoryRouteValueFunction = categoryName => {
        let categoryRouteValue = "#!/category/";
        if (categoryName) {
            const categoryNameWords = categoryName.split(" ");
            for (let i = 0, len = categoryNameWords.length; i < len; i++) {
                categoryRouteValue = categoryRouteValue.concat(categoryNameWords[i].charAt(0).toUpperCase() + categoryNameWords[i].slice(1));
            }
        }
        return categoryRouteValue;
    };

    /**
     * prepare categoryImgPath from categoryName
     * 
     * @param  {} categoryName, of the category
     */
    const categoryImgPathValueFunction = categoryName => {
        let categoryImgPathValue = "images/categoryItems/";
        if (categoryName) {
            const categoryNameWords = categoryName.split(" ");
            for (let i = 0, len = categoryNameWords.length; i < len; i++) {
                categoryImgPathValue = categoryImgPathValue.concat(categoryNameWords[i].charAt(0).toLowerCase() + categoryNameWords[i].slice(1));
                if (i < len-1) {
                    categoryImgPathValue = categoryImgPathValue.concat("-");
                }
            }
            categoryImgPathValue = categoryImgPathValue.concat(".png");
        }
        return categoryImgPathValue;
    };

    /**
     * prepare categoryTitle from categoryName
     * 
     * @param  {} categoryName, of the category
     */
    const categoryTitleValueFunction = categoryName => {
        let categoryTitleValue = "";
        if (categoryName) {
            var categoryNameWords = categoryName.split(" ");
            for (let i = 0, len = categoryNameWords.length; i < len; i++) {
                categoryTitleValue = categoryTitleValue.concat(categoryNameWords[i].charAt(0).toUpperCase() + categoryNameWords[i].slice(1));
                if (i < len-1) {
                    categoryTitleValue = categoryTitleValue.concat(" ");
                }
            }
        }
        return categoryTitleValue;
    };

    /**
     * prepare categoryDescription from categoryName
     * 
     * @param  {} categoryDescription, of the category
     */
    const categoryDescriptionValueFunction = categoryDescription => {
        let categoryDescriptionValue = "";
        if (categoryDescription) {
            categoryDescriptionValue = categoryDescription.charAt(0).toUpperCase() + categoryDescription.slice(1);
            if (categoryDescription[categoryDescription.length -1] != ".") {
                categoryDescriptionValue = categoryDescriptionValue.concat(".");
            }
        }
        return categoryDescriptionValue;
    };

    /**
     * send category data
     */
    $scope.addCategoryItem = () => {
        const catItem = $scope.categoryItem;
        catItem.categoryId = categoryIdValueFunction(catItem.categoryTitle);
        catItem.categoryRoute = categoryRouteValueFunction(catItem.categoryTitle);
        catItem.categoryImage = categoryImgPathValueFunction(catItem.categoryTitle);
        catItem.categoryTitle = categoryTitleValueFunction(catItem.categoryTitle);
        catItem.categoryDescription = categoryDescriptionValueFunction(catItem.categoryDescription);

        $http({
            method: 'POST',
            url: '/admin',
            data: catItem
        }).then(function success(response) {
            refresh();
            $scope.categoryItem = {};
        }, function errorCallback(error) {
            // TODO: add error page code here
        });
    };

    /**
     * view category details
     * 
     * @param  {} id, of the category
     */
    $scope.viewCategoryDetails = id => {
        $http({
            method: 'GET',
            url: `/Admin/${id}`
        }).then(function success(response) {
            $scope.selectedCategoryItem = {};
            $scope.selectedCategoryItem = response.data[0];
        }, function errorCallback(error) {
            // TODO: add error page code here
        });
    };

    /**
     * delete category item
     * 
     * @param  {} id, of the category
     */
    $scope.removeCat = id => {
        $http({
            method: 'DELETE',
            url: `/admin/${id}`
        }).then(function success(response) {
            refresh();
        }, function errorCallback(error) {
            // TODO: add error page code here
        });
    };

    /**
     * edit category data
     * 
     * @param  {} id, of the category
     */
    $scope.editCategoryItem = id => {
        const catItem = $scope.selectedCategoryItem;
        catItem.categoryId = categoryIdValueFunction(catItem.categoryTitle);
        catItem.categoryRoute = categoryRouteValueFunction(catItem.categoryTitle);
        catItem.categoryImage = categoryImgPathValueFunction(catItem.categoryTitle);
        catItem.categoryTitle = categoryTitleValueFunction(catItem.categoryTitle);
        catItem.categoryDescription = categoryDescriptionValueFunction(catItem.categoryDescription);

        $http({
            method: 'PUT',
            url: `/admin/${id}`,
            data: catItem
        }).then(function success(response) {
            $scope.selectedCategoryItem = {};
            refresh();
        }, function errorCallback(error) {
            // TODO: add error page code here
        });
    };

    /**
     * tab view for admin category options
     * 
     * @param  {} tabName, of the category
     */
    $scope.isActive = "editCategory";
    $scope.activeButton = tabName => {
        $scope.isActive = tabName;
    };
}]);
