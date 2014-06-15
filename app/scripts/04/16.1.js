	'use strict';

	console.log('Chapter 4: Demo 16.1, Functions Can Be Nested');

	// Functions can be nested inside of other functions indefinitely
	// below we encaspsulate the goo function insid of the bar function, which is inside of the foo function

	var foo = function() {
		var bar = function() {
			var goo = function(){
				console.log(this);
			}();
		}();
	}();