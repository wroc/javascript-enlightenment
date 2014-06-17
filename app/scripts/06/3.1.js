	'use strict';

	console.log('Chapter 6: Demo 2.1, How Is the Value of this Determined');

	// You might be wondereing what happens to this when it used inside of a function that is contained insideof another function. The bad news is in ES3, this loses it's way and refers to the head object(window object in browser), instead of object within which the function is defined.

	var myObject = {
		func1: function(){
			console.log(this);
			var func2 = function() {
				console.log(this);
				var func3 = function() {
					console.log(this);
				}();	
			}();
		}
	};

	myObject.func1();
