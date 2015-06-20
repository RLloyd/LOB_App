/**
 * Created by Odee on 6/10/15.
 */
(function () {
    'use strict';
    /*app.controller("ControllerBasics",
     ["$scope", "$http", "$resource" "$interval", "$anchorScroll", "$location",
     function ($scope, $http, $resource, $interval, $anchorScroll, $location) {

     /!*----------| SCOPE VARS |----------*!/
     $scope.title = "GitHub Viewer";
     $scope.shortBlurb;// = something;

     */
    /*angular.module("gdApp").controller("ProductDetailCtrl", ["$scope", function ProductDetailCtrl($scope){
     $scope.test = "Testing";
     var vm = this;
     //vm.title = "Titolo";

     /!*Hard coded data for development testing only*!/
     vm.product = {
     "productId": 9,
     "productName": "Garden Cart",
     "productCode": "GDN-0023",
     "releaseDate": "June 11, 2015",
     "description": "15 galloon capacity rolling garden cart",
     "cost": 20.00,
     "price": 32.99,
     "category": "garden",
     "tags": ["barrow", "cart", "wheelbarrow"],
     "imageUrl": "images/johnEating.jpg"
     };
     /!*End hard coded*!/

     vm.title = "Product Detail: " + vm.product.productName;

     if (vm.product.tags) {
     vm.product.tagList = vm.product.tags.toString();
     }

     };*/
    angular.module("gdApp").controller("ProductDetailCtrl", ["product", "productService", ProductDetailCtrl]);
    //angular.module("gdApp").controller("ProductDetailCtrl", ["$scope", ProductDetailCtrl]);
    //app.controller("ProductDetailCtrl", ProductDetailCtrl);
    console.log("Product Detail Controller");
    function ProductDetailCtrl(product, productService) {
        var vm = this;
        vm.product = product;
        /*Hard coded data for development testing only*/
        /*vm.product = {
         "productId": 1,
         "productName": "John John Poot",
         "productCode": "JFG-0808",
         "releaseDate": "June 11, 2015",
         "description": "Naughty boy who likes to tease his Mom and loves corn.",
         "cost": 20.00,
         "price": 32.99,
         "category": "Food",
         "tags": ["vegies", " fruit", " yummy"],
         "imageUrl": "images/johnEating.jpg"
         };*/
        /*End hard coded*/
        vm.title = "Link Detail: " + vm.product.productName;
        vm.marginPercent = productService.calculateMarginPercent(vm.product.price, vm.product.cost);
        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }
    }
}());
//# sourceMappingURL=productDetailCtrl.js.map