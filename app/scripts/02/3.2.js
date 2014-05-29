	'use strict';

	console.log('Chapter 2: Demo 3.1, Getting/Setting/Updating an Objects Properties Using Dot Notation or Bracket Notation');

	// Bracket Notation is the comon notation for getting setting and updating an objects properties.
	var manny = new Object();

	// setting Properties
	manny['living'] = true;
	manny['age'] = 32;
	manny['gender'] = 'male';
	manny['getGender'] = function() { return manny.gender; };

	// get Properties
	console.log(manny['living'], manny['age'], manny['gender'], manny['getGender']());

	// update Properties, exactly like setting
	manny['living'] = false;
	manny['age'] = 45;
	manny['gender'] = 'female';
	manny['getGender'] = function() { return 'Gender = ' + manny.gender; };

	console.log(manny);