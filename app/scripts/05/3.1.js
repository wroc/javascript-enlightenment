	'use strict';

	console.log('Chapter 5: Demo 3.1, The Head Object vs Global Properties and Global Variables');


	// JavaScript ships with some predefined function.
	var foo = 'bar'; // foo is a global object and a property of the head/window object

	var myApp = function(){
		var run = function() {
			console.log(foo);
		}();
	}

	myApp();