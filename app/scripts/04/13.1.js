	'use strict';

	console.log('Chapter 4: Demo 13.1, Anonymous Functions');

	//  An anonymous function that is not given an identifier. Ananymous functions are mostly used for passing functions as a paramater to another function

	//function(){ console.log('hi');};

	var sayHi = function(f){
		f();
	};

	// pass an anonymous function as paramater
	sayHi(function(){
		console.log('hi');
	});