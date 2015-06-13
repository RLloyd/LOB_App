/**
 * Created by Odee on 6/12/15.
 */

(function () { //IIFE
	'use strict';

	/*Register controller to the main module*/
	angular.module("gdApp").controller("ProductEditCtrl", ["product", ProductEditCtrl]);

	function ProductEditCtrl(product){
		var vm = this;
		vm.product = product;

		if(vm.product && vm.product.productId){
			vm.title = "Edit X :  " + vm.product.productName;
		} else {
			vm.title = "New Product X";
		}
	}

}());