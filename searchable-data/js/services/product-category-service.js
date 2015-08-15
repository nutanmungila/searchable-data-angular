var app = angular.module("productCategoryApp");

app.factory("productCategoryService", ["$http", function($http) {
  var productCategoryService = {
    data: {
      products: [],
      showInStock: false,
      searchText: {}
    },
    getCategory: function() {
      return $http.get('product-data.json').success(function(data) {
        productCategoryService.data.products = data;
      });
    }
  };
  return productCategoryService;
}]);
