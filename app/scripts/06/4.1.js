	'use strict';

	console.log('Chapter 6: Demo 4.1, How Is the Value of this Determined');

	var foo = {
		func1: function(bar) {
			bar();
			console.log(this);
		}
	};

	foo.func1(function(){console.log(this)});