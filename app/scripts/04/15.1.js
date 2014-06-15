	'use strict';

	console.log('Chapter 4: Demo 15.1, Self-Invoking Anonymous Functions');

	// it is possible to create anonymouse function statement that is Self-Invoked

	// most commonly used/seen in the wild
	(function(msg){
		console.log(msg);
	})('Hi');

	// slightly different but acheiving the same thing:
	(function(msg){
		console.log(msg)
	}('Hello'));

	// the shortest possible solution
	!function sayHi(msg) { console.log(msg); }('Hello there');