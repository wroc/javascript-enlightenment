	'use strict';

	console.log('Chapter 2: Demo 3.4, Getting/Setting/Updating an Objects Properties Using Dot Notation or Bracket Notation');

	console.log('Additionally, bracket Notation can come in handy fo rgetting a property names that are invalid JavaScript identifires. Below i use a number and a reserved keyword as a property name(valid) as a string) that only bracket notation can access');

	var myObject = { '123': 'zero', 'class': 'foobar' };

	// lets see dot notation do this! keep in mind 'class' is a JavaScript keyword
	console.log(myObject['123'], myObject['class']);

	// it can't do what bracket notation can do, in fact it causes an error
	// console.log(myObject.0, myObject.class);