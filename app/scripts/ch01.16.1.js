	'use strict';

	console.log('Chapter 1: Demo 1.16.1, All Constructo Instances Have Constructor Properties that Point to Their Constructor Function');

	console.log('Below I have instantiated most of the pre-configured objects that come included with the JavaScript language, Note using the "contructor" property on literal/primitive values correctly resolves to the right constructor');

	var myNumber = new Number('23');
	var myNumberL = 23;
	var myString = new String('male');
	var myStringL = 'male';
	var myBoolean = new Boolean(true);
	var myBooleanL = true;
	var myObject = new Object();
	var myObjectL = {};
	var myArray = new Array('foo','bar');
	var myArrayL = [];
	var myFunction = new Function();
	var myFunctionL = function() {};
	var myDate = new Date();
	var myRegExp = new RegExp('\\bt[a-z]+\\b');
	var myRegExpL = /./;
	var myError = new Error();

	console.log(
		myNumber.constructor === Number,
		myNumberL.constructor === Number,
		myString.constructor === String,
		myStringL.constructor === String,
		myBoolean.constructor === Boolean,
		myNumberL.constructor === Boolean,
		myObject.constructor === Object,
		myObjectL.constructor === Object,
		myFunction.constructor === Function,
		myNumberL.constructor === Function,
		myDate.constructor === Date,
		myRegExp.constructor === RegExp,
		myRegExpL.constructor === RegExp
		);

	console.log('');
	console.log('The constructor property also works on user-defined constructor functions. Below we define a CustomConstructor() constructor function, then using the keyword new, we invoke the function to produce an object, once we have our object we can then leverage the constructor property');

	var CustomConstructor = function CustomConstructor(){ return 'WOW!'; };
	var instanceOfCustomObject = new CustomConstructor();

	console.log(instanceOfCustomObject.constructor === CustomConstructor);
	console.log(instanceOfCustomObject.constructor);