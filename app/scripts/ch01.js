
//create the Manny object 
//console.log('Chapter 1: Demo 1.0');
'use strict';
/*
var manny = new Object();

manny.living = true;
manny.age = 31;
manny.gender = 'male';

console.log(Manny);
*/

// console.log('Chapter 1: Demo 1.1');
/*
var Manny = new Object();
Manny.living = true;
Manny.age = 31;
Manny.gender = 'Male';
Manny.getGender = function(){
	return Manny.gender;
};
Manny.getAge = function(){
	return Manny.age;
};
Manny.getStatus = function(){
	return Manny.living;
};
*/

// console.log('Chapter 1: Demo 1.2');
/*
var myObject = new Object(); //producs an object objec
myObject['0'] = 'f';
myObject['1'] = 'o';
myObject['2'] = 'o';

console.log(myObject);

var myString = new String('foo');

console.log(myString);
*/

//console.log('Chapter 1: Demo 1.3.0');

// define person constructor
/*
var Person = function(living, age, gender){
	this.living = living;
	this.age = age;
	this.gender = gender;
	this.getGender = function(){ return this.gender; };
};

//instantiate a Person onbject and store it in ther Manny variable
var Manny = new Person(true, 31, 'male');

console.log(Manny);
/*
This String  constructor function below, having been defined by Javascript, has the same pattern. Because the string constructor is native to JavaScript, all we have to do to get a string instance is instantiate it. But the pattern is the same whether we use native constructors lke String() or user-defined constructors like Person();
*/
/*
var myString = new String('foo');

console.log(myString);
*/

//console.log('Chapter 1: Demo 1.3.1, Javascript Constructors Construct and Return Objects Instances');
// create MannyB object using the Object() constructor
/*
var MannyA = new Object();

MannyA.living = true;
MannyA.age = 31;
MannyA.gender = 'male';
MannyA.getGender = function() { return MannyA.gender; };

console.log(MannyA);
*/

// "this" below is the new object that is being created ie, this new Object();
/*
var Person = function(living, age, gender, name){
	this.living = living;
	this.age = age;
	this.gender = gender;
	this.name = name
	this.getGender = function() { return this.gender; };
	this.getName = function(){ return this.name };
	//when the function is called with the new keyword "this" is returned instead of undefined
};
*/

// instantiate a Person object object named MannyF
/*
var MannyF = new Person(true, 33, 'male', 'Mannuel Ferreira');
console.log(MannyF);

var refilweF = new Person(true, 31, 'female', 'Refilwe Ferreira');
console.log(refilweF);
*/

//log object
// console.log(typeof MannyF); 
// //logs the internal properties and values of Manny
// console.log(MannyF);
// //logs the Person(); function
// console.log(MannyF.constructor);

console.log('Chaper 1: Demo 1.4, Javascript Constructors Construct and Return Objects Instances');

var myArray = new Array();
console.log(myArray);
console.log(myArray.constructor);





