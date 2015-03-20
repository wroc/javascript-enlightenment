'use strict';

console.log('Chapter 1: Demo 1.5, Primitive (a.k.a Simple) Values');

var myString = 'string';
var myNumber = 10;
var myBoolean = false;
var myNull = null;
var myUndefind = undefined;

console.log(myString, myNumber, myBoolean, myNull, myUndefind);


/*
Consider that a complex object like array or object can be made up of multiple primitive values, and thus becomes a complex set of  multiple values
*/

var myObject = {
    myString: 'string',
    myNumber: 10,
    myBoolean: true,
    myNull: null,
    myUndefind: undefined
};

console.log(myObject);


var myArray = ['string', 10, false, null, undefined];

console.log(myArray);
