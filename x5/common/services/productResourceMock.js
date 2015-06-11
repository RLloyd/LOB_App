/**
 * Created by Odee on 6/9/15.
 */
/*x3: productResourceMock
 * Add this file as DI in "app" module
 * THIS IS FOR MOCKING DATA FOR DEVELOPMENT
 * */
/*Data is still hard-coded here but this app is Web Service ready.
 When connecting to a web service just remove this as DI in "app" module*/
(function () {
    'use strict';
    var appX = angular.module("productResourceMock", ["ngMockE2E"]);
    appX.run(function ($httpBackend) {
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
        var productUrl = "/api/products";
        //When "productUrl" is intercepted response with the "products" data instead
        $httpBackend.whenGET(productUrl).respond(products);
        //-----------| For Editing data
        var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var product = { "productId": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];
            if (id > 0) {
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId == id) {
                        product = products[i];
                        break;
                    }
                }
            }
            return [200, product, {}];
        });
        //-----------| For Saving data
        $httpBackend.whenPOST(productUrl).respond(function (method, url, data) {
            var product = angular.fromJson(data);
            if (!product.productId) {
                //new product id
                product.productId = products[products.length - 1].productId + 1;
                products.push(product);
            }
            else {
                //updated product
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId == products.productId) {
                        products[i] = product;
                        break;
                    }
                }
            }
            return [200, product, {}];
        });
        //Pass through any requests for application files
        //Any file inside the app folder will be pass through
        $httpBackend.whenGET(/app/).passThrough();
    });
}());
//# sourceMappingURL=productResourceMock.js.map