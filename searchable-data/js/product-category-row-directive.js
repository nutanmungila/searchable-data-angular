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

app.controller("BodyCtrl", ["$scope", "productCategoryService", function($scope,
  productCategoryService) {

  productCategoryService.getCategory();
  $scope.productServiceData = productCategoryService.data;

}]);
