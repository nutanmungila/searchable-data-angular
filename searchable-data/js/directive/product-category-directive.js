var app = angular.module("productCategoryApp");

app.directive("productCategoryRow", [function() {
  return {
    restrict: 'E',
    scope: {
      productCategory: "=category"
    },
    templateUrl: '/template/product-category-row-directive.html'
  };
}]);

app.directive("productRow", [function() {
  return {
    restrict: 'E',
    scope: {
      productCategory: "=category"
    },
    templateUrl: '/template/product-row-directive.html',
    controller: ["$scope", "productCategoryService", function($scope,
      productCategoryService) {
      $scope.productServiceData = productCategoryService.data;

    }]
  };
}]);

app.directive("searchBox", [function() {
  return {
    restrict: 'E',
    templateUrl: '/template/search-box.html',
    controller: ["$scope", "productCategoryService", function($scope,
      productCategoryService) {
      $scope.productServiceData = productCategoryService.data;
    }]
  };
}]);

app.directive("productTable", [function() {
  return {
    restrict: 'E',
    templateUrl: '/template/product-table-directive.html'
  };
}]);
