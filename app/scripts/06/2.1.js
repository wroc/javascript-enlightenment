	'use strict';

	console.log('Chapter 6: Demo 1.1, How Is the Value of this Determined');

	// the myObject in the code below is given a property called sayFoo, which points to sayFoo function.
	// When the sayFoo function is called from the global scope, this refers to the window object. 
	// when it is called as a method of myObject, this refers to myObject

	var foo = 'foo';
	var myObject = {foo: 'I am myObject.foo'};

	var sayFoo = function() {
		console.log(this.foo);
	};

	// give myObject a sayFoo property and have i point to sayFoo function
	myObject.sayFoo = sayFoo;

	window.myObject.sayFoo();

	window.sayFoo();

	//  clearly, the value of this is based on the context in which the function is being called. Concider that both myObject.sayFoo and sayFoo point to the same function. However depending upon where sayFoo() is called from, the value of this is different.