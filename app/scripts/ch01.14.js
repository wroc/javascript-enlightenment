	'use strict';

	console.log('Chapter 1: Demo 1.14, The Type Operator Used on Primitive and Cmoplex Values');

	console.log('The "typeof" operator can be used to return the type of value you are dealing with');

	console.log('PRIMTIVE VALUES');
	//primitive Values
	var myNull = null;
	var myUndefined = undefined;
	var PrimitiveString1 = "string";
	var PrimitiveString2 = String('string');
	var PrimitiveNumber1 = 10; 
	var PrimitiveNumber2 = Number('10');
	var PrimitiveBoolean1 = true;
	var PrimitiveBoolean2 = Boolean('true');

	console.log(typeof myNull);
	console.log(typeof myUndefined);
	console.log(typeof primitiveString1, typeof PrimitiveString2);
	console.log(typeof PrimitiveNumber1, typeof PrimitiveNumber2);
	console.log(typeof PrimitiveBoolean1, typeof PrimitiveBoolean2);
	
	console.log(' ');
	console.log('COMPLEX VALUES');
	//complex Values
	var myNumber = new Number(23);
	var myString = new String('male');
	var myBoolean = new Boolean(false);
	var myObject = new Object();
	var myArray = new Array('foo', 'bar');
	var myFunction = new Function("x", "y", "return x * y");
	var myDate = new Date();
	var myRegExp = new RegExp('\\bt[a-z]+\\b');
	var myError = new Error('Crap!');

	console.log(typeof myNumber);
	console.log(typeof myString);
	console.log(typeof myBoolean);
	console.log(typeof myObject);
	console.log(typeof myArray);
	console.log(typeof myFunction);
	console.log(typeof myDate);
	console.log(typeof myRegExp);
	console.log(typeof myError);


