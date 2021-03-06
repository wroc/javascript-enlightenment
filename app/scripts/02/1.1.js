	'use strict';

	console.log('Chapter 2: Demo 1.1, Complex Object Can Contain Most of the JavaScript Values as Properties');

	console.log('A Complex object can have any permitted JavaScript value. Below i create an Object  object called myObject and then properties representing the majority of values available in JavaScript');

	var myObject = {};

	//contain properties inside of myObject representing most of the values JavaScript values
	myObject.myFunction = function() {};
	myObject.myArray = [];
	myObject.myString = 'string hello there';
	myObject.myNumber = 31;
	myObject.myDate = new Date();
	myObject.myObject = {};
	myObject.myMath_PI = Math.PI;
	myObject.myError = new Error('CRAP!');

	console.log(
		myObject.myFunction, 
		myObject.myArray, 
		myObject.myNumber, 
		myObject.myDate,
		myObject.myObject,
		myObject.myMath_PI,
		myObject.myError

		);


	var myFunction = function() {};

	// works the same with any of the complext objects, for example function
	myFunction.myFunction = function() {};
	myFunction.myFunction = function() {};
	myFunction.myArray = [];
	myFunction.myString = 'string hello there';
	myFunction.myNumber = 31;
	myFunction.myDate = new Date();
	myFunction.myObject = {};
	myFunction.myMath_PI = Math.PI;
	myFunction.myError = new Error('CRAP!');

	console.log(		
		myFunction.myFunction, 
		myFunction.myArray, 
		myFunction.myNumber, 
		myFunction.myDate,
		myFunction.myObject,
		myFunction.myMath_PI,
		myFunction.myError
	);

	// the simple take away is that complex objects can contain or refer to anything you can nominally express in JavaScript.