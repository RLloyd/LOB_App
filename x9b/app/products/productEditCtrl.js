/**
 * Created by Odee on 6/12/15.
 */
(function () {
    'use strict';
    console.log("productEditCtrl.ts");
    /*Register controller to the main module*/
    /*The old way*/
    /*angular.module("gdApp")
     .controller("ProductEditCtrl", ["product", "$state", "productService", ProductEditCtrl]);*/
    //.directive("updateDirective", updateDirective);
    /*Recommended*/
    angular
        .module("gdApp")
        .controller("ProductEditCtrl", ProductEditCtrl);
    ProductEditCtrl.$inject = ["product", "$state", "productService"];
    function ProductEditCtrl(product, $state, productService) {
        var vm = this;
        vm.product = product;
        vm.priceOption = "percent"; //btn-radio default selection
        //---- Calls to the "productService"
        vm.marginPercent = function () {
            return productService.calculateMarginPercent(vm.product.price, vm.product.cost);
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
        }
        else {
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
         console.log("populated: ", vm.populated);*/
        //vm.inputProductName = "";
        /*vm.mayLaman = function(){
         console.log("vm.product.productName: ", vm.product.productName);
         console.log("inputProductName: ", vm.inputProductName);
         //vm.populated = false;
         console.log("populated: ", vm.populated);
         if(vm.product.productName){
         vm.populated = true;
         console.log("mayLaman() : vm.populated", vm.populated);
         //vm.popMe = true;
         } else {
         //vm.popMe = false;
         vm.populated = false;
         console.log("mayLaman() : vm.populated", vm.populated);
         }
         };*/
        //console.log("submit(): vm.product.productName: ", vm.product.productName);
        //console.log("vm.inputProductName1: ",vm.inputProductName);
        //console.log("vm.inputSearchTags: ",vm.inputSearchTags);
        //var prod = "";
        //vm.popModel = false;
        /*vm.popModel = "notPopulated";*/
        vm.submit = function (isValid) {
            //vm.populated = true;
            /*vm.popModel = "populated";*/
            //prod = vm.product.productName;
            //console.log("submit(): vm.product.productName: ", vm.product.productName);
            //console.log("submit(): prod: ", prod);
            /*if(vm.product.productName){
             //console.log("submit() : vm.product.productName populated")
             //vm.popMe = true;
             }*/
            if (isValid) {
                vm.product.$save(function (data) {
                    toastr.success("Save Successful");
                    //vm.mayLaman();
                    //console.log("submit(): prod: ", prod);
                    //console.log("vm.inputProductName2: ",vm.inputProductName);
                    //$state.go("productList");
                    //vm.populated = true;
                    /*vm.mayLaman();
                     vm.popMe = true;
                     console.log("populated: ", vm.populated);*/
                });
            }
            else {
                //console.log("vm.product: ", vm.product)
                alert("Please correct the validation error first");
            }
        };
        vm.submitPrice = function (isValid) {
            if (vm.product.productName) {
                if (isValid) {
                    vm.product.$save(function (data) {
                        toastr.success("Save Successful");
                    });
                }
                else {
                    //console.log("vm.product: ", vm.product)
                    alert("Please correct the validation error first");
                }
            }
            else {
                //alert("Please fill out the Basic Information first");
                vm.infoWarning = "Please fill out the Basic Information first";
            }
        };
        //var tagPresent;
        vm.submitTag = function (isValid) {
            //console.log("populated1: ", vm.populated);
            //if (vm.populated) {
            //console.log("vm.inputProductName2b: ", vm.inputProductName);
            //console.log("submitTag() : vm.product.productName populated")
            //console.log("submit(): vm.popModel: ", vm.popModel);
            /*console.log("vm.popModel: ", vm.popModel);*/
            console.log("vm.product.productName: ", vm.product.productName);
            console.log("vm.product.productId: ", vm.product.productId);
            console.log("vm.inputProductName: ", vm.inputProductName);
            //if (vm.popModel === "populated") {
            console.log("vm.product.tags: ", vm.product.tags);
            if (vm.product.productId) {
                if (vm.product.tags) {
                    if (isValid) {
                        vm.product.$save(function (data) {
                            toastr.success("Save Successful");
                            //$state.go("productList");
                            //console.log("populated2: ", vm.populated);
                            vm.infoWarning = "Saved";
                            vm.changeColor("green");
                        });
                    }
                    else {
                        //console.log("vm.product: ", vm.product)
                        //alert("Please correct the validation error first");
                        vm.infoWarning = "Info Warning: Product Name and Code are Required.";
                        vm.changeColor("red");
                    }
                }
                else {
                    vm.infoWarning = "Info Warning: Please add a tag to save.";
                    vm.changeColor("red");
                }
            }
            else {
                //alert("Please fill out the Basic Information first");
                //vm.basicInfoWarning = "Please fill out the Basic Information first";
                vm.infoWarning = "Info Warning: Product Name and Code are Required.";
                vm.changeColor("red");
            }
            //}
        };
        vm.customStyle = {};
        vm.changeColor = function (kulay) {
            //elem.fontcolor(kulay);
            vm.customStyle.style = { "color": kulay };
            /*var col=document.getElementById(elem);
             console.log("col: ", col);*/
            //col.style.color=kulay;
        };
        var infoWarningGreen = function (elem) {
            var infoId = document.getElementById(elem);
            console.log("infoId:", infoId);
            //document.getElementById(vm.infoWarning).style.color = color;
        };
        //For the cancel button: re-direct to a state
        vm.cancel = function () {
            $state.go("productList");
        };
        //Search tags
        vm.addTags = function (tags) {
            //if (vm.populated) {
            console.log("vm.product.tags: ", vm.product.tags);
            if (tags) {
                /*tagPresent = true;
                 console.log("tagPresent: ",tagPresent);*/
                var array = tags.split(',');
                vm.product.tags = vm.product.tags ? vm.product.tags.concat(array) : array;
                vm.newTags = "";
            }
            else {
                alert("Please enter one or more tags separated by commas");
            }
            /*} else {
             console.log("Not populated")
             }*/
        };
        vm.removeTag = function (idx) {
            vm.product.tags.splice(idx, 1);
        };
    }
}());
//# sourceMappingURL=productEditCtrl.js.map