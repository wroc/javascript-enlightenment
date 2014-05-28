	'use strict';

	console.log('Chapter 2: Demo 1.1, Encapsulating Complex Objects in a Programmatically Beneficial way');

	console.log('The Objec(), Array() and function() objects can contain other complex objects');

	// encapsulation using objects, create object chains
	var object1 = {
		object1_1: {
			object1_1_1: { foo: 'foo' },
			object1_1_2: {},
			object1_1_3: { more: 'more foor bar'}
		},
		object1_2: {
			object1_2_1: { },
			object1_2_2: { },
		}
	};

	console.log(object1.object1_1.object1_1_1.foo, object1.object1_1.object1_1_3.more);
