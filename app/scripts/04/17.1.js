	'use strict';

	console.log('Chapter 4: Demo 17.1, Passing Functions to Functions and Returning Functions from Functions');

	// below we are passing an anonymous function to the foo function, which we then immediately return from the foo function
	// it is this anonymous function that the variable bar points to, since foo accepts and then returns the anonymous function

	var foo = function(f) {
		return f;
	};

	var bar = foo(function() {console.log('Hi');});

	bar();
