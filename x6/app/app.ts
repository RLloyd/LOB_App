/**
 * Created by Odee on 6/8/15.
 */

(function () { //IIFE

	'use strict';

	var app = angular.module("gdApp",
		["common.services",
			"ui.router",
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

					/*-----| PRODUCT EDIT |-----*/
					///////////////////05_05:Defining Abstract States
					/*.state("productEdit", {
					 abstract: true,
					 url: "/products/edit/: productId",
					 templateUrl: "app/products/productEditView.html",
					 controller: "ProductEditCtrl as vm",
					 //---Add resolve on the parent and the nested views will inherit
					 resolve:{
					 prodResource: "productResource",
					 product: function(prodResource, $stateParams){
					 var productId = $stateParams.productId;
					 console.log("prodResource: ",prodResource);
					 console.log("productId: ",productId);
					 return productResource.get({ productId: productId }).$promise;
					 }
					 }
					 })*/
					.state("productEdit", {
						abstract: true, ///////////////////05_05:Defining Abstract States
						url: "/products/edit/:productId",
						templateUrl: "app/products/productEditView.html",
						controller: "ProductEditCtrl as vm",
						resolve: {
							productResource: "productResource",
							product: function (productResource, $stateParams) {
								var productId = $stateParams.productId;
								console.log("prodResource: ", productResource);
								console.log("productId: ", productId);
								return productResource.get({productId: productId}).$promise;
							}
						}
					})

					/*Product Edit Nested States  05_04: Nested Routing States*/
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
					/*End nested states*/
					/*-----| END PRODUCT EDIT |-----*/

					//-----| Show product details based on "productId" using "resolve" object
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
								return productResource.get({productId: productId}).$promise;
							}
						}
					});

				$urlRouterProvider.otherwise("/");
				/*default*/
			}]
	)

}());