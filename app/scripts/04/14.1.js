	'use strict';

	console.log('Chapter 4: Demo 14.1, Self-Invoking Function Expression');

	// a function expression, any function except on created from the Function() constructor can be immediatly invoked by using the parenthesis operator

	var sayWord = function() { console.log('Word 2 yo mo!');}();