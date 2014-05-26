	'use strict';

	console.log('Chapter 1: Demo 1.16, All Constructo Instances Have Constructor Properties that Point to Their Constructor Function');

	console.log('When any object is instantiated , the Constructor property is created behind the scenes as as property of that object/instance. This points to the constructor function that created the object');

	var foo = {};

	console.log(foo.constructor === Object);
	console.log(foo.constructor);

	console.log(' ');

	console.log('This can be handy: if working with some instance, and you cant see who of what created it, you can determine if it\'s an array, an object or whatever ');