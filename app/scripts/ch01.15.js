	'use strict';

	console.log('Chapter 1: Demo 1.15, Dynamic Properties Allow for Mutable Object');

	console.log('Complex object are made up of Dynamic Properties, This allows for user-defined objects and most of the native object to mutated. This means its possible to store properties on native constructors and add new methods to the native objects with additions to their prototype objects');

	/*augment the built-in string constructor Function with the augmentedProperties property*/

	String.augmentedProperties = [];

	if (!String.prototype.trimIT){
		String.prototype.trimIT = function() {
			return this.replace(/^\s+|\s+$/g, '');
		};

		// now add the trimIT string to the augmentProperties array
		String.augmentedProperties.push('trimIT');
	};

	var myString = ' trim me ';
	console.log(myString.trimIT()); // invoke our custom trimIT string method, logs 'trim me'

	console.log(String.augmentedProperties.join());
