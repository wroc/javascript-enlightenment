	'use strict';

	console.log('Chapter 4: Demo 19.1, A Function Can Call Itself(Recursion)');

	var countDownFrom = function countDownFrom(num) {
		console.log(num);
		num--; // change the parameter value
		if (num < 0){return false;} // if num < 0 return function with no recursion. could have also done arguments.callee(num) if it was an anonymous function
		countDownFrom(num);
	};

	countDownFrom(5);

	console.log('');
	console.log('it is not uncommon for a function to invoke itself - recursion');
