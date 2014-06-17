	'use strict';

	console.log('Chapter 5: Demo 5.1, The Head Object Is Implied and Typically Not Referenced Explicitly');

	var foo = { // the window implied here, window.foo
		fooMethod: function(){
			alert('foo' + 'bar'); //window is implied here, window.alert
			window.alert('foo' + 'bar'); // window is explicitly used, with the same effect
		}
	};

	foo.fooMethod();