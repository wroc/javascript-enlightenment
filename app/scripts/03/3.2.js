	'use strict';

	console.log('Chapter 3: Demo 3.2, Creating Object() Objects Using "Object Literals"');

	console.log('Using one statement: Creating an object literal entails instantiating an object with or with out properties using braces');

	var manny = {
		living: true,
		age: 31,
		gender: 'male',
		getGender: function() { return manny.gender; }
	};

	console.log(manny);