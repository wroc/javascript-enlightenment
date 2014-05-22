'use strict';

console.log('Chapter 1: Demo 1.2, User-Defined/Non-Native Object Contstuctor Functions');

// We can make our own constructor functions, from which we can produce not just one but multiple custom objects

var Person = function(living, age, gender) {
	this.living = living;
	this.age = age;
	this.gender = gender;
	this.getGender = function() { return this.gender; };
};

var manny = new Person(true, 33, 'male');
console.log(manny); 

var refilwe = new Person(true, 33, 'female');
console.log(refilwe);

