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
					function($stateProvider, $urlRouterProvider){

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
								url: "/products/edit/: productId",
								templateUrl: "app/products/productEditView.html",
								controller: "ProductEditCtrl as vm"
							})

						$urlRouterProvider.otherwise("/"); /*default*/
					}]
	)

}());