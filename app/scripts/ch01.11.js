	'use strict';

	console.log('Chapter 1: Demo 1.11, How Comlex Values Are Stored/Copied in JavaScript');

	console.log('Complex values are stored and manipulated by referance. When creating a variable containing a complex object, the value is stored in momory at an address. When you referance a ccomplex object you are using its name/variable/object property to retreive the value at that address in memory. ');
	
		console.log('NB when you change a complex value-because it is stored by referance-you change the value stored in all varaibles that referance that complex value. In our code example both myObject and copyOfMyObject are changes when you update the object stored in either variable.');

	var myObject = {};

	var copyOfMyObject = myObject; // not copied by value, just the referance is copied

	myObject.foo = 'hello hotel cali'; //manipulate the value stored in myObject

	// now if we log myObject and copyOfMyObject, they will have a foo property because they referancethe same object
	console.log(myObject, copyOfMyObject);

