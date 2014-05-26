	'use strict';

	console.log('Chapter 1: Demo 1.17, Verify that an Object Is an Instance of a Particular Constructor Function');

	console.log('By Using the instanceof operator, we can determing (true or false) if an object is an instance of a Particular function');

	//user-defined object Constructor
	var CustomConstructor = function() { this.foo = 'bar'; };

	//instaniate an instane of CustomConstructor
	var instanceOfCustomObject = new CustomConstructor();

	console.log(instanceOfCustomObject instanceof CustomConstructor); 

	//works the same as a native object
	console.log(new Array('foo') instanceof Array);
