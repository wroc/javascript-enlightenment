	'use strict';

	console.log('Chapter 2: Demo 2.1, Encapsulating Complex Objects in a Programmatically Beneficial way');

	console.log('The Objec(), Array() and function() objects can contain other complex objects');

	// encapsulation using arrays creates multidimensional array chain
	var myArray = [[[]]];

	//example of encaspulation using functions: and empty function inside a function
	var myfunction = function(){
		//empty
		var myfunction = function(){
			//empty
			var myfunction = function(){

			};
		};
	};

	// we can get crazy and mix and match too
	var foo = [{foo: [{bar: {say: function(){ return 'hi'; }}}]}];
	console.log(foo[0].foo[0].bar.say());
