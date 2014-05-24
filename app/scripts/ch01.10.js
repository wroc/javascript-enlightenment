	'use strict';

	console.log('Chapter 1: Demo 1.10, The String, Number, and Boolean Primitive Values Act Like Objects When Used Like Objects');

	console.log('The native Object Constructors "Object(), Array(), Function(), Date(), Error() and RegExp()" are complex becasue they can contain one or more primitive or complex values.');

	var object = {
		myString: 'string hello there',
		myNumber: 10,
		myBoolean: false,
		myNull: null,
		myUndefined: undefined
	};

	console.log(object);

	var array = ['string hello there', 10, false, null, undefined];

	console.log(array);

	/*
	Contrast this to the simplicity of the primitive values below. In Primitive from, noen of the values below can be more complex than what you see while complex values can encapsulate any of the JavaScript values (seen above)
	*/

	var myString = 'string hello there';
	var myNumber = 10;
	var myBoolean = false;
	var myNull = null;
	var myUndefined = undefined;