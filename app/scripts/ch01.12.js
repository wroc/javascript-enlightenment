	'use strict';

	console.log('Chapter 1: Demo 1.12, Complex Objects Are Equal by Referance');

	console.log('When comparing complex objects, they are equal only when they reference the same object(have the same address). Two variables containing identical objects are not equal to each since they do not actually point to the sam object.');

	var objectFoo = {same: 'same'};
	var objectBar = {same: 'same'};

	console.log(objectFoo === objectBar);

	var objectA = {foo: 'bar'};
	var objectB = objectA;

	console.log(objectA === objectB);