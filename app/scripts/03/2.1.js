

	console.log('Chapter 3: Demo 2.1, Object Parameters');
	console.log('If a value besides null or undefined i passed to the object() constructor, the value passsed wil be created as an object. so theoretially we can us the Object() constructor to create any of teh other native object that have a constructor ');

	//* Use Object() constructor to create a string, number, array, function, boolean and regex object
	// logs below confirm object creation

	console.log(new Object('foo'));
	console.log(new Object(1));
	console.log(new Object([]));
	console.log(new Object(function(){}));
	console.log(new Object(true));
	console.log(new Object(/\bt[a-z]+\b/));

	console.log();
	console.log('creating a string, number, array, function, boolean, and regex object instance via the Object() constructor is never done. this is for demonstration purpouses');