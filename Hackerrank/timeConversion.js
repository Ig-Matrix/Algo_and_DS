/**
 Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
-s = '12:01:00PM'
Return '12:01:00'.

-s = '12:01:00AM'

Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in 12 hour format
Returns

string: the time in 24 hour format
 */

let sampleInput = '07:05:45PM'
let arr = sampleInput.split('')
console.log(arr);
// let sampledate= new Date(sampleInput)
arr.splice(2,2, '/')
// arr.splice(5,5, '/')
let sayd = arr.join('')
console.log(sayd);




//Assignment
//-Constructors(why,how,when)
//-Inheritance(super,extends)
//-methods(getters,setters,static)
//-private or public

