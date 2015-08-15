var app = angular.module("productCategoryApp");

app.controller("BodyCtrl", ["$scope", "productCategoryService", function($scope,
  productCategoryService) {

  productCategoryService.getCategory();
  $scope.productServiceData = productCategoryService.data;

}]);
