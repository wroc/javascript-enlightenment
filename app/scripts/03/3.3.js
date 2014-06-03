	'use strict';

	console.log('Chapter 3: Demo 3.3, Creating Object() Objects Using "Object Literals"');

	console.log('Using as strings: Creating an object literal specifired as strings');

	var manny = {
		'living': true,
		'age': 31,
		'gender': 'male',
		'getGender': function() { return manny.gender; }
	};

	console.log(manny);