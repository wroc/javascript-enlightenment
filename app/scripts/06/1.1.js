	'use strict';

	console.log('Chapter 6: Demo 1.1, The this Keyword');

	var manny = {
		living : true,
		age : 23,
		gender : 'male',
		getGender : function() { return manny.gender; } // using dot notation
	};

	console.log(manny.getGender()); 

	// rewritten using the this Keyword
	var manny = {
		living : true,
		age : 23,
		gender : 'male',
		getGender : function() { return this.gender; } // using dot notation
	};

	console.log(manny.getGender()); 