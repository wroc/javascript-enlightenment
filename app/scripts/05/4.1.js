	'use strict';

	console.log('Chapter 5: Demo 4.1, Refering to the Head Object');

	var foo =  'bar';

	windowRef1 = window;
	windowRef2 = this;

	console.log(windowRef1, windowRef2);

	console.log(windowRef1.foo, windowRef2.foo); 