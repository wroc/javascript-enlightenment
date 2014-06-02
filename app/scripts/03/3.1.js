	'use strict';

	console.log('Chapter 3: Demo 3.1, Creating Object() Objects Using "Object Literals"');

	console.log('Creating an object literal entails instantiating an object with or with out properties using braces');

	var manny = new Object();
	manny.living = true;
	manny.age = 32;
	manny.gender = 'male';
	manny.getGender = function() { return manny.gender;};

	console.log(manny);