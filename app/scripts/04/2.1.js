	'use strict';

	console.log('Chapter 4: Demo 4.2, Function Parameters');

	var addFunction = new Function('num1', 'num2', 'return num1 + num2');

	/*Alternatively, a single comma-seperated string itht arguments can be the first paramets of the constructor, with the function body following.*/
	var timesFunction = new Function('num1, num2', 'return num1 * num2');

	console.log(addFunction(2,2),timesFunction(2,2));


	//versus the more common patterns for instantiating a function
	var addFunction = function(num1, num2) { return num1 + num2; }; //expression form
	function addFunction(num1, num2) { return num1 + num2 };

	console.log(addFunction(2,2));
