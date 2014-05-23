	'use strict';

	console.log('Chapter 1: Demo 1.7, How primitive Values Are Stored/Copied in JavScript');

	console.log('primitive values are stored and manipulated at "face value". If you store the string value "foo" in a variable called myString, then the value "foo" is literally stored in memory as such.');

	var myString = 'foo' //creates a primitive string value
	var myStringCopy = myString; // copy its value into a new variable

	var myString = null; // manipulate the value stored in the myString variable

	/*
	The original value from myString was copied to myStringCopy. this is confirmed by updating the valiue of myString then checking the value of myStringCopy
	*/

	console.log(myString, myStringCopy);



