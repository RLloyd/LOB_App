/**
 * Created by Odee on 6/8/15.
 */
(function () {
    'use strict';
    angular.module("gdApp").controller("ProductListCtrl", ["productResource", ProductListCtrl]);
    function ProductListCtrl(productResource) {
        var vmj = this;
        productResource.query(function (data) {
            vmj.products = data;
        });
        /*productResource.query(prodFunct);
        function prodFunct(data){
         vmj.products = data;
        }*/
        /*vmj.products = [
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
        ];*/
        vmj.showImage = false;
        vmj.toggleImage = function () {
            vmj.showImage = !vmj.showImage;
        };
    }
}());
//# sourceMappingURL=productListCtrl.js.map