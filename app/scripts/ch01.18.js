	'use strict';

	console.log('Chapter 1: Demo 1.18.0, An Instance Create From a Constructor Can Have Its Own Independent Properties (Instance Properties)');

	console.log('In JavaScript Objects can be augmented at any time. Mutable objects');

	var myArray= new Array();
	myArray.prop = 'test';

	console.log(myArray.prop);