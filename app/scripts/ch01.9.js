	'use strict';

	console.log('Chapter 1: Demo 1.9, The String, Number, and Boolean Primitive Values Act Like Objects When Used Like Objects');

	console.log('When a primitive value is used as if if were an object created by a constructor, JavaScript converts it an object in order to repsond to the expression at han, but then discards teh object qualitites and changes it back to a primitive value.');

	// Produce primitive values
	var myNull = null;
	var myUndefined = undefined;
	var primitiveString1 = "foo";
	var primitiveString2 = String('foo'); // did not use new, we get a primitive
	var primitiveNumber1 = 10;
	var primitiveNumber2 = Number('10'); // did not use new, so we get primitive
	var primtiveBoolean1 = true;
	var primtiveBoolean2 = Boolean('false'); // did not sue new, so we primtive 

	/*
	Access the toSrting() property method  (inherited by objects from object.prototype ) to demoonstrate that the primitive values are converted to objects when treated like objects.
	*/

	console.log(
		primitiveString1.toString(),
		primitiveString2.toString()
		);

	console.log(
		primitiveNumber1.toString(),
		primitiveNumber2.toString()
		);

	console.log(
		primtiveBoolean1.toString(),
		primtiveBoolean2.toString()
		);

