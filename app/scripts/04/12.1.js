	'use strict';

	console.log('Chapter 4: Demo 12.1, Defining a Function (Statement, Expression or Constructor)');

	// functions are invoked using four different scenarios or patterns
	/*
	1. As a function
	2. As a method
	3. As a constructor
	*/

	// function pattern
	var myFunction = function(){
		return 'foo';
	};
	console.log(myFunction());

	// method pattern
	var myObject = { myFunction: function(){ return 'bar' }}
	console.log(myObject.myFunction());

	// constructor pattern
	var Manny = function(){
		this.living = true,
		this.age = 32,
		this.gender = 'male',
		this.getGender = function() { return this.gender; };
	};
	var manny = new Manny(); // invoke via Manny constructor
	console.log(manny);

	// apply() and call() pattern
	var greet = {
		runGreet: function() {
			console.log(this.name, arguments[0],arguments[1]);
		}
	};

	var manny = { name:'manny'};
	var refilwe = { name:'refilwe'};

	// invoke the runGreet function as if it were inside of the cody object
	greet.runGreet.call(manny, 'foo', 'bar');

	// invoke the runGreet function as if it were inside of the refilwe object
	greet.runGreet.apply(refilwe, ['foo', 'bar']); 



