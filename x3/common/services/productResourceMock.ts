/**
 * Created by Odee on 6/9/15.
 */

/*x3: productResourceMock
* Add this file as DI in "app" module
* THIS IS FOR MOCKING DATA FOR DEVELOPMENT
* */

/*Data is still hard-coded here but this app is Web Service ready.
When connecting to a web service just remove this as DI in "app" module*/

(function () { //IIFE
	'use strict';

	var app = angular.module("productResourceMock", ["ngMockE2E"]);

	app.run(function ($httpBackend) {
		var products = [
			{
				"productId": 1,
				"productName": "Lingerie Skimpy",
				"productCode": "GDN-0011",
				"releaseDate": "March 19, 2010",
				"description": "Leaf rake with 48-inch wooden handle.",
				"cost": 9.00,
				"price": 19.95,
				"category": "garden",
				"tags": ["leaf", "tool"],
				"imageUrl": "images/sexyPinay_01.jpg"
			},
			{
				"productId": 2,
				"productName": "American Undies",
				"productCode": "GDN-0011",
				"releaseDate": "March 19, 2010",
				"description": "Leaf rake with 48-inch wooden handle.",
				"cost": 9.00,
				"price": 19.95,
				"category": "garden",
				"tags": ["leaf", "tool"],
				"imageUrl": "images/sexyPinay_02.jpg"
			},
			{
				"productId": 3,
				"productName": "G-String",
				"productCode": "GDN-0011",
				"releaseDate": "March 19, 2010",
				"description": "Leaf rake with 48-inch wooden handle.",
				"cost": 9.00,
				"price": 19.95,
				"category": "garden",
				"tags": ["leaf", "tool"],
				"imageUrl": "images/sexyPinay_03.jpg"
			}
		];

		//Url that expected to intercept. This Url was issued in "productResource" service
		var productUrl = "/api/products"

		//When "productUrl" is intercepted response with the "products" data instead
		$httpBackend.whenGET(productUrl).respond(products);

	})
	
}());