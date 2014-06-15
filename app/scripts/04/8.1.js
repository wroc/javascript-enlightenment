	'use strict';

	console.log('Chapter 4: Demo 8.1, The Function Instance length Property and arguments.length');

	var myFunction = function(z, s, d) {
		return arguments.length;
	};

	console.log(myFunction()); //logs 0 because no parameters were passed to teh function