	'use strict';

	console.log('Chapter 4: Demo 4.1, Functions Are First Class Citizins(Not Just Syntax but Vaues) ');

	// Functions can be stored in variables (funcA), arrays (funcB), and objects (funcC())
	var funcA = function(){}; // called like so: funcA()
	var funcB = [function(){}]; // called like so: funcB[0]()
	var funcC = {method: function(){}}; //too.method() or func['method']()

	// functions can be sent to, and sent back from, funtions
	var funcD = function(funcc){
		return funcc
	};

	var runFuncPassedToFuncD = funcD(function(){console.log('hi');});

	runFuncPassedToFuncD();

	// functions are objects, which mean they can have properties
	var funcE = function(){};
	funcE.answer = 'yup'; // instance property
	console.log(funcE.answer);

	console.log('');
	console.log('A function is an object and thus a value, It can be passed around and augmented like any other expression in JavaScript');