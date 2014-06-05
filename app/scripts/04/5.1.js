	'use strict';

	console.log('Chapter 4: Demo 5.1, Passing Parameters to a Function');

	// Paramaters are vehicles for passing values into the scope of a function when it is invoked.

	var addfunction = function(number1, number2){
		var sum = number1 + number2;
		return sum;
	};

	console.log(addfunction(3,9));