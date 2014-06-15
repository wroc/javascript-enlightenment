	'use strict';

	console.log('Chapter 4: Demo 10.1, Return a Function Before It Is Done(Cancel Function Execution)');

	var add = function(x, y) {
		//If the paramaters are not numbers, return error.
		if (typeof x !== 'number' || typeof y !== 'number') { return 'pass in numbers'; }
		return x + y;
	};

	console.log(add(3,3));
	console.log(add('2','2'));

	console.log('');
	console.log('You can cancel a function\'s execution by using return keyword at any point');