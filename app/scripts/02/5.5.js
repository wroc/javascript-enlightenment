	'use strict';

	console.log('Chapter 2: Demo 5.5, Using hasOwnProperty, Verify That an Object Property Is Not From the Prototype Chain');

	var myObject = { foo: 'value' };

	console.log(myObject.hasOwnProperty('foo'));

	console.log(myObject.hasOwnProperty('toString'));

	console.log('The hasOwnProperty method should be levereaged when you need to determine whether a property is local to an object or inherited from the prototype chain');
