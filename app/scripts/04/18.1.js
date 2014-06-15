	'use strict';

	console.log('Chapter 4: Demo 18.1, Invoking Function Statements before they are defined(Function Hoisting');

	//  A function statement can be invoked during execution before its actual definition. 

	// example 1
	var speak = function() {
		sayYo();
		function sayYo() { console.log('Yo');}
	}();

	// example 2
	console.log(sum(2, 2)); // invoke sum(), which is not defined yet. but can still be invoked.

	function sum(x, y) { return x + y; }