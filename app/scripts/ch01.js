
//create the Manny object 
console.log('Chapter 1: Demo 1.0');
/*
var manny = new Object();

manny.living = true;
manny.age = 31;
manny.gender = 'male';

console.log(Manny);
*/

// console.log('Chapter 1: Demo 1.1');

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
