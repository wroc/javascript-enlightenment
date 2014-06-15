	'use strict';

	console.log('Chapter 4: Demo 9.1, Redefining Function Parameters');

	var foo = false;
	var bar = false;

	var myFunction = function(foo, bar) {
		arguments[0] = false;
		bar = false; // redefine bar parameter
		console.log(arguments[0], bar); // logs true true
	};

	myFunction();