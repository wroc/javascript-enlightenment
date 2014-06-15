	'use strict';

	console.log('Chapter 4: Demo 11.1, Defining a Function (Statement, Expression or Constructor) )');

	// A function can be defined in three different ways: a function constructor, a function statement, or a function expression.

	// function constructor : the last paramater is the function logic, everything before it is a paramater
	var addConstructor = new Function('x', 'y', 'return x + y');

	// function statement
	function addStatement(x, y) {
		return x + y
	};

	// function expression
	var addExpression = function(x, y) {
		return x + y;
	};

	console.log(addConstructor(2,2), addStatement(2,2), addExpression(3,3));