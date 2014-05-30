	'use strict';

	console.log('Chapter 2: Demo 5.1, How Referance to Object Properties Are Resolved');

	console.log('JavaScript will look in two places, Array.prototype and then Object.prototype');

	var myArray = [];

	console.log(myArray.foo);