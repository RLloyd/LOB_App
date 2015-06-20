/**
 * Created by Odee on 6/9/15.
 */

/*
* x3: productResource
* */

(function () { //IIFE
	'use strict';

	/* from common.services module
	angular.module("common.services", ["ngResource"])*/

	angular.module("common.services").factory("productResource", ["$resource", productResource]);

	function productResource ($resource){
		//console.log("$resource: ",$resource);
		//console.log("$resource(/api/products/:productId): ",($resource("/api/products/:productId")));
		return $resource(
			"/api/products/:productId"
			/*{ 'query': { method: 'GET'}}*/
		)
	}
}());


/*
productResource.query(prodFunct);
function prodFunct(data){
	vm.products = data;
}*/
