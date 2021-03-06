/**
 * Created by Odee on 6/12/15.
 */

(function () { //IIFE
	'use strict';

	/*Register controller to the main module*/
	angular.module("gdApp").controller("ProductEditCtrl", ["product", "$state", "productService", ProductEditCtrl]);

	function ProductEditCtrl(product, $state, productService) {
		var vm = this;
		vm.product = product;
		vm.priceOption = "percent"; //btn-radio default selection


		//---- Calls to the "productService"
		vm.marginPercent = function () {
			return productService.calculateMarginPercent(vm.product.price, vm.product.cost)
		};

		/*Calculate the price based on the markup*/
		vm.calculatePrice = function () {
			var price = 0;
			if (vm.priceOption == 'amount') {
				price = productService.calculatePriceFromAmount(vm.product.cost, vm.markupAmount);
			}
			if (vm.priceOption == 'percent') {
				price = productService.calculatePriceFromPercent(vm.product.cost, vm.markupPercent);
			}
			vm.product.price = price;
		};
		//--- End Calls

		if (vm.product && vm.product.productId) {
			vm.title = "Edit X :  " + vm.product.productName;
		} else {
			vm.title = "New Product X";
		}

		//Date picker
		vm.open = function ($event) {
			$event.preventDefault();
			$event.stopPropagation();

			vm.opened = !vm.opened;
		};

		//For the submit button
		/*vm.submit = function(){
		 vm.product.$save();
		 };*/

		/*vm.populated = false;
		console.log("populated: ", vm.populated);

		vm.mayLaman = function(){
			vm.populated = true;
			console.log("populated: ", vm.populated);
		};

		vm.popMe = false;*/

		vm.submit = function (isValid) {
			//vm.populated = true;
			if (isValid) {
				vm.product.$save(function (data) {
					toastr.success("Save Successful");
					//$state.go("productList");
					//vm.populated = true;
					/*vm.mayLaman();
					vm.popMe = true;
					console.log("populated: ", vm.populated);*/
				})
			} else {
				//console.log("vm.product: ", vm.product)
				alert("Please correct the validation error first");
			}
		};
		vm.submitTag = function (isValid) {
			//console.log("populated1: ", vm.populated);
			//if (vm.populated) {
				if (isValid) {
					vm.product.$save(function (data) {
						toastr.success("Save Successful");
						//$state.go("productList");
						//console.log("populated2: ", vm.populated);
					})
				} else {
					//console.log("vm.product: ", vm.product)
					alert("Please correct the validation error first");
				}
			//}
		};

		//For the cancel button: re-direct to a state
		vm.cancel = function () {
			$state.go("productList");
		}

		//Search tags
		vm.addTags = function (tags) {
			//if (vm.populated) {
				if (tags) {
					var array = tags.split(',');
					vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
					vm.newTags = "";
				} else {
					alert("Please enter one or more tags separated by commas");
				}
			/*} else {
				console.log("Not populated")
			}*/
		};

		vm.removeTag = function (idx) {
			vm.product.tags.splice(idx, 1)
		}

	}

}());