/**
 * Created by Odee on 6/9/15.
 */
/*x3
This module will be injected in app module
as well as called to create a factory/services in productResource module
*/


(function () { //IIFE
	'use strict';

	angular.module("common.services", ["ngResource"]);

	/*Create a factory/service that communicates with web server as another file,
		"productResource". All services will be in their own and encapsulated. */
	
}());