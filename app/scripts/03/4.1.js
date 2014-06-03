	'use strict';

	console.log('Chapter 4: Demo 4.1, Conceptual Overview of Using Function() Objects');

	var addNumbersA = new Function('num1', 'num2', 'return num1 + num2');

	console.log(addNumbersA(2,2));
	console.log(addNumbersA); 

	console.log();
	console.log('Could also be written the literal way, which is much more common');

	var addNumbersB = function(num1, num2){ return num1 + num2;};

	console.log(addNumbersB(2, 2));
	console.log(addNumbersB);