	'use strict';

	console.log('Chapter 1: Demo 1.8, Primitive Values Are Equal by Value');

	console.log('primitive values can be compared to see if their values are literally the same.');

	var price1 = 10;
	var price2 = 10;
	var price3 = new Number('10'); // a complex numeric object because new was used
	var price4 = price3;

	console.log(price1 === price2);

	console.log(price4 === price3);

	price4 = 10;

	console.log(price4 === price3);


