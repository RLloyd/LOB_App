/**
 * Created by Odee on 6/8/15.
 */

(function () { //IIFE
	'use strict';

	angular.module("gdApp").controller("ProductListCtrl", ProductListCtrl);

	function ProductListCtrl(){
		var vmj = this;
		vmj.products = [
			{
				"productId": 1,
				"productName": "Leaf Rake",
				"productCode": "GDN-0011",
				"releaseDate": "March 19, 2010",
				"description": "Leaf rake with 48-inch wooden handle.",
				"cost": 9.00,
				"price": 19.95,
				"category": "garden",
				"tags": ["leaf", "tool"],
				"imageUrl": "images/johnEating.jpg"
			},
			{
				"productId": 2,
				"productName": "Hammer",
				"productCode": "GDN-0011",
				"releaseDate": "March 19, 2010",
				"description": "Leaf rake with 48-inch wooden handle.",
				"cost": 9.00,
				"price": 19.95,
				"category": "garden",
				"tags": ["leaf", "tool"],
				"imageUrl": "images/odeeSchool.jpg"
			},
			{
				"productId": 3,
				"productName": "Planer",
				"productCode": "GDN-0011",
				"releaseDate": "March 19, 2010",
				"description": "Leaf rake with 48-inch wooden handle.",
				"cost": 9.00,
				"price": 19.95,
				"category": "garden",
				"tags": ["leaf", "tool"],
				"imageUrl": "images/johnEating.jpg"
			}
		];

		vmj.showImage = false;
		vmj.toggleImage = function(){
			vmj.showImage = !vmj.showImage;
		}
	}
	
}());