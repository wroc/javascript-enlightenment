'use strict';

console.log('Chapter 1: Demo 1.6, The primitive Values, undefined, "string", 10, true and false Are Not Objects');

// null and undefinded values do not require a constructor function, nor the 'new' operator 
// to use null or undefined, all you do is use them as if they were an operator

//no object is create when producing primitive values, no 'new' keyword used either

var primitiveString1 = "foo";
var primitiveString2 = String('foo');
var primitiveNumber1 = 10;
var primitiveNumber2 = Number('10');
var primitiveBoolean1 = true;
var primitiveBoolean2 = Boolean('true');

//confirm the typeof is not object
console.log(typeof primitiveString1, typeof primitiveString2);
console.log(typeof primitiveNumber1, typeof primitiveNumber2);
console.log(typeof primitiveBoolean1, typeof primitiveBoolean2);


// versus the usage of a constructor and new keyword for creating objects
var myNumber = new Number(23);
var myString = new String('male');
var myBoolean = new Boolean(false);
var myOject = new Object();
var myArray = new Array('foo','bar');
var myFunction = new Function("x" ,"y", "return x * y");
var myDate = new Date();
var myRegExp = new RegExp('\\bt[a-z]+\\b');
var myError = new Error('Crap!');

console.log(
typeof myNumber,
typeof myString,
typeof myBoolean,
typeof myObject,
typeof myArray,
typeof myFunction, // be AWARE typeof returns function for all function objects
typeof myDate,
typeof myRegExp, // be AWARE typeof returns function for RegExp()
typeof myError
);

/* 
Primitive values are not objects. Primitive values are special in that they are used to represent simple values
*/

	
