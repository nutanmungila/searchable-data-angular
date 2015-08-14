var app = angular.module("productCategoryApp");


app.directive("productCategoryRow", [function() {
  return {
    restrict: 'E',
    scope: {
      productCategory: "=category"
    },
    templateUrl: '/directives/product-category-row-directive.html'
  };
}]);

app.controller("BodyCtrl", ["$scope", function($scope) {
  $scope.categoryName = "aaa";
}]);

app.factory("productCategoryService", ["$http", function($http) {
  var productCategoryService = {
    data: {
      category: ""
    },
    getCategory: function() {
      return $http.get('product-data.json').success(function(data) {
        productCategoryService.data.category = data.category;
      });
    }
  };
  return productCategoryService;
}]);
