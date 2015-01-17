/**
 * AngularJS wrapper for Modernizr
 *
 * @author Hein Bekker <hein@netbek.co.za>
 * @copyright (c) 2015 Hein Bekker
 * @license http://www.gnu.org/licenses/agpl-3.0.txt AGPLv3
 */

(function (window, angular, undefined) {
	'use strict';

	angular
		.module('nb.modernizr', [])
		.factory('Modernizr', ['$window', function Modernizr ($window) {
				var Modernizr = $window.Modernizr;
				delete $window.Modernizr;
				return Modernizr;
			}])
		.run(runBlock);

	// Invoke at runtime to allow factory to delete global reference.
	runBlock.$inject = ['Modernizr'];
	function runBlock (Modernizr) {
	}
})(window, window.angular);