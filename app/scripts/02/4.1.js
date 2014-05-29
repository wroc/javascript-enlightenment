	'use strict';

	console.log('Chapter 2: Demo 4.1, Deleting Object Properties');

	console.log('The delete operator can be used to completely remove Properties from an object. Below we delete the bar Property from the foo object');

	var foo = { bar: 'bar'};

	delete foo.bar;
	console.log('bar' in foo);