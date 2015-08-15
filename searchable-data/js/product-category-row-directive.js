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

app.directive("productRow", [function() {
  return {
    restrict: 'E',
    scope: {
      productCategory: "=category"
    },
    templateUrl: '/directives/product-row-directive.html',
    controller: ["$scope", "productCategoryService", function($scope,
      productCategoryService) {
      $scope.productServiceData = productCategoryService.data;

    }]
  };
}]);

app.directive("searchBox", [function() {
  return {
    restrict: 'E',
    templateUrl: '/directives/search-box.html',
    controller: ["$scope", "productCategoryService", function($scope,
      productCategoryService) {
      //  $scope.checkBokSelected = isSelectedCheckBox;
      $scope.productServiceData = productCategoryService.data;
      // $scope.$watch('isSelected', function(newValue) {
      //   console.log($scope.isSelected);
      // })
    }]
  };
}]);

app.directive("productTable", [function() {
  return {
    restrict: 'E',
    templateUrl: '/directives/product-table-directive.html'
  };
}]);

app.controller("BodyCtrl", ["$scope", "productCategoryService", function($scope,
  productCategoryService) {

  productCategoryService.getCategory();
  $scope.productServiceData = productCategoryService.data;

}]);
