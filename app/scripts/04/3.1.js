	'use strict';

	console.log('Chapter 4: Demo 3.1, Functions Always Return a Value');

	var sayHi = function(){
		return 'Hi';
	};

	console.log(sayHi()); //logs 'Hi'


	var yelp = function(){
		console.log('I am yelping!');
		//functions return undefined even if we dont's
	};
	console.log(yelp() === undefined);
