

	console.log('Chapter 3: Demo 2.1, Object Parameters');
	console.log('Object() constructor function takes one optional perameter. That perameter is the value you woudl like to create, if you provide no perameter, then null or undefined value will be assumed');

	//create an empty  object with no properties
	var manny = new Object();
	var manny2 = new Object(undefined);
	var manny3 = new Object(null);

	console.log(typeof manny, typeof manny2, typeof manny3);