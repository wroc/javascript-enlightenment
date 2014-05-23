'use strict';

console.log('Chapter 1: Demo 1.4, Creating Shorthand/Literal Values from Constructors');

// 

var myNumber = new Number(23); // an object
var myNumberLiteral = 23; // primitive number value, not an object

var myString = new String('male');
var myStringLiteral = 'male';

var myBoolean = new Boolean(false);
var myBooleanLiteral = false;

var myObject = new Object();
var myObjectLiteral = {};

var myArray = new Array('foo', 'bar');
var myArrayLiteral = ['foo', 'bar'];

var myFunction = new Function("x", "y", "return x*y");
var myFunctionLiteral = function(x, y) { return x*y };

var myRegExp = new RegExp('\bt[a-z]+\b');
var myRegExpLiteral = /\bt[a-z]+\b/;

console.log(myNumber.constructor, myNumberLiteral.constructor);
console.log(myString.constructor, myStringLiteral.constructor);
console.log(myBoolean.constructor, myBooleanLiteral.constructor);
console.log(myObject.constructor, myObjectLiteral.constructor);
console.log(myArray.constructor, myArrayLiteral.constructor);
console.log(myFunction.constructor, myArrayLiteral.constructor);
console.log(myRegExp.constructor, myRegExpLiteral.constructor);

