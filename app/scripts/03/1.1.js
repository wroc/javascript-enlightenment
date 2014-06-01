

	console.log('Chapter 3: Demo 1.1, Conceptual Overview oof Using Objects Obejcts');

	var manny = new Object(); // create an empty object with no properties

	for (key in manny) {
		if(manny.hasOwnProperty(key)) { // confirm that manny is an empty generic object
			console.log(key); // should not see any logs, because manny itself has no properties
		}
	}