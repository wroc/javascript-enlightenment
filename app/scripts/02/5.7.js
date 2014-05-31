	'use strict';

	console.log('Chapter 2: Demo 5.6, Enumerate (Loop Over) an Objects Properties using the for in loop ');

	var manny = {
		age: 31,
		gender: 'male'
	};

	for (var key in manny){ // key is a variable used to represent each property name
		// avoid properies inherited from the prototype chain
		if(manny.hasOwnProperty(key)){
			console.log(key);
		}
	} 