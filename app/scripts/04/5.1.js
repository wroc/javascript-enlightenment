	'use strict';

	console.log('Chapter 4: Demo 6.1, this and arguments Values Available to All Functions');

	// Inside the scope/body of all function , the this and arguments values are Available
	var add = function(){
		return arguments[0] + arguments[1];
	};

	console.log('add(4,4)');

	console.log('');
	console.log('The this keyword, passed to all functions is a reference to the object tha contains the function');

	var myObject1 = {
		name: 'myObject1',
		myMethod: function(){ console.log(this); }
	};

	myObject1.myMethod()

	var myObject2 = function(){ console.log(this); };

	myObject2()