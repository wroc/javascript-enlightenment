'use strict';

//console.log('Chapter 1: Demo 1.3, Instantiating Constructors Using the new Operator ');

// A constructor is a cookie cutter template used to create pre-configured objects 

/* 
var myString = new String('foo');

console.log(myString);
*/

console.log('Chapter 1: Demo 1.3.1, Instantiate an instance of each native constructor using the new keyword');

var myNumber = new Number(33);
var myString = new String('male');
var myBoolean = new Boolean(false);
var myObject = new Object();
var myArray = new Array('foo', 'bar');
var myFunction = new Function("x", "y", "return x*y");
var myDate = new Date();
var myRegExp = new RegExp('\bt[a-z]+\b');
var myError = new Error('Crap!');

console.log(myNumber.constructor);
console.log(myString.constructor);
console.log(myBoolean.constructor);
console.log(myObject.constructor);
console.log(myArray.constructor);
console.log(myFunction.constructor);
console.log(myDate.constructor);
console.log(myRegExp.constructor);
console.log(myError.constructor);