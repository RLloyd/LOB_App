/**
 * Created by Odee on 6/10/15.
 */
(function () {
    'use strict';
    angular.module("gdApp").controller("ProductDetailCtrl", ProductDetailCtrl);
    function ProductDetailCtrl() {
        var vm = this;
        vm.product = product;
        vm.title = "Product Detail: " + vm.product.productName;
        if (vm.product.tags) {
            vm.product.tagList = vm.product.tags.toString();
        }
    }
}());
//# sourceMappingURL=productDetailCtrl.js.map