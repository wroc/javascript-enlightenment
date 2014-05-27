	'use strict';

	console.log('Chapter 1: Demo 1.18.1, An Instance Create From a Constructor Can Have Its Own Independent Properties (Instance Properties)');

	console.log('In JavaScript Objects can be augmented at any time. Mutable objects');

	// this can be done with any of the native constructos that actually produce an objects

	var myString = new String();
	var myNumber = new Number();
	var myBoolean = new Boolean;
	var myObject = new Object();
	var myArray = new Array();
	var myFunction = new Function('return 2+2');
	var myRegExp = new RegExp('\bt[a-z]+\b');

	myString.prop = 'test';
	myNumber.prop = 'test';
	myBoolean.prop = 'test';
	myArray.prop = 'test';
	myFunction.prop = 'test';
	myRegExp.prop = 'test';

	console.log(

		myString.prop,
		myNumber.prop,
		myBoolean.prop,
		myArray.prop,
		myFunction.prop,
		myRegExp.prop

		);

	console.log('');
	console.log('Be Aware: instance properties do not work with primitive/literal values');

	var myString = 'string';
	var myNumber = 10;
	var myBoolean = true;

	myString.prop = 'test';
	myNumber.prop = 'test';
	
	console.log(

		myString.prop,
		myNumber.prop,
		myBoolean.prop,
		myArray.prop,
		myFunction.prop,
		myRegExp.prop

		);

	console.log('');
	console.log('Keep in mind besides their own properties, instances can properties inherited from the prototype chain. Or, as we just saw in the code, properties added to the constructor after instantiation. This highlights the dynamic nature of object in JavaScript.');
