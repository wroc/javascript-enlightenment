	'use strict';

	console.log('Chapter 4: Demo 8.2, Using the length property of Function() instances we can grab the total number of paramaters the function is expecting');

	var myFunction = function(z, s, d, e, r, m, q) {
		return myFunction.length;
	};

	console.log(myFunction()); //logs 0 because no parameters were passed to teh function