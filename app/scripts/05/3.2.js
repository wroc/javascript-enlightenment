	'use strict';

	console.log('Chapter 5: Demo 3.2, The Head Object vs Global Properties and Global Variables');

	var myFunction = function() { var foo = 'bar' }; //foo is now in the scope of myFunction

	var myApp = function(){
		var run = function(){
			console.log(foo); //foo is undefined, no longer in the global scope error occurs
		}();
	}

	myApp();