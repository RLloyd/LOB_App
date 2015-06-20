/**
 * Created by Odee on 6/8/15.
 */
(function () {
    'use strict';
    var app = angular.module("gdApp", ["common.services",
        "ui.router",
        "ui.mask",
        "ui.bootstrap",
        "productResourceMock"]);
    app.config(["$stateProvider",
        "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {
            //---Defining the 3 states and the views for the Menu
            $stateProvider
                .state("home", {
                url: "/",
                templateUrl: "app/welcomeHomeView.html"
            })
                .state("productList", {
                url: "/products",
                templateUrl: "app/products/productListView.html",
                controller: "ProductListCtrl as vm"
            })
                .state("productEdit", {
                abstract: true,
                url: "/products/edit/:productId",
                templateUrl: "app/products/productEditView.html",
                controller: "ProductEditCtrl as vm",
                resolve: {
                    productResource: "productResource",
                    product: function (productResource, $stateParams) {
                        var productId = $stateParams.productId;
                        //console.log("prodResource: ", productResource);
                        //console.log("productId: ", productId);
                        return productResource.get({ productId: productId }).$promise;
                    }
                }
            })
                .state("productEdit.info", {
                url: "/info",
                templateUrl: "app/products/productEditInfoView.html"
            })
                .state("productEdit.price", {
                url: "/price",
                templateUrl: "app/products/productEditPriceView.html"
            })
                .state("productEdit.tags", {
                url: "/tags",
                templateUrl: "app/products/productEditTagsView.html"
            })
                .state("productDetail", {
                url: "/products/:productId",
                templateUrl: "app/products/productDetailView.html",
                controller: "ProductDetailCtrl as vm",
                //---Adding resolve: prodResource is the key name, value: "productResource" is a string alias of the service
                resolve: {
                    productResource: "productResource",
                    product: function (productResource, $stateParams) {
                        var productId = $stateParams.productId;
                        console.log("prodResource: ", productResource);
                        console.log("productId: ", productId);
                        return productResource.get({ productId: productId }).$promise;
                    }
                }
            });
            $urlRouterProvider.otherwise("/");
            /*default*/
        }]);
}());
//# sourceMappingURL=app.js.map