	'use strict';

	console.log('Chapter 5: Demo 1.1, The Head Global Object');

	var myStringVar = 'myString';
	var myFunctionVar = function() {};
	myString = 'myString';
	myFunction = function() {};

	console.log('myStringVar' in window);
	console.log('myFunctionVar' in window);
	console.log('myString' in window);
	console.log('myFunction' in window);