	'use strict';

	console.log('Chapter 1: Demo 1.13, Complex Objects Have Dynamic Properties');

	console.log('A variable that points to an existing complex object does not copy the object. This is why complex objects are sometimes reference objects. A complex objec can have as many references as you want, they will always refer to the same object, even as the object itself changes');

	var objA = { property: 'value'};

	var pointer1 = objA;
	var pointer2 = pointer1;

	//update the objA.property, and all the references (pointer1 and pointer2) are updated
	objA.property = '899';

	console.log(objA.property, pointer1.property, pointer2.property);

	//This allows for dynamic object properties because you can define an object, create references, update the object and all the variables refering to the object will "get" that update.
