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
		return $resource("/api/products/:productId")
	}

	
}());


/*
productResource.query(prodFunct);

function prodFunct(data){
	vm.products = data;
}*/
