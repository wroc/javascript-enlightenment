
//create the Manny object 
// console.log('Chapter 1: Demo 1.0');

// var manny = new Object();

// manny.living = true;
// manny.age = 31;
// manny.gender = 'male';

// console.log(Manny);


// console.log('Chapter 1: Demo 1.1');
/*
var Manny = new Object();
Manny.living = true;
Manny.age = 31;
Manny.gender = 'Male';
Manny.getGender = function(){
	'use strict';
	return Manny.gender;
};
Manny.getAge = function(){
	'use strict';
	return Manny.age;
};
Manny.getStatus = function(){
	'use strict';
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

console.log('Chapter 1: Demo 1.3.0');

// define person constructor
var Person = function(living, age, gender){
	'use strict';
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
var myString = new String('foo');

console.log(myString);

// create MannyB object using the Object() constructor
var MannyB = new Object();


