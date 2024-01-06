/**
 * 
 * LINK: https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true
 * 
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


/**----------------SOLUTION ONE------------ */
function timeConversion(s) {
   // Write your code here
   let timed = s.slice(0, -2).split(":");
   let soln;
   if (s.endsWith("PM") && timed[0] < "12") {
      timed[0] = +timed[0] + 12;
      soln = timed.join(":");
   } else if (s.endsWith("AM") && timed[0] === "12") {
      timed[0] = "00";
      soln = timed.join(":");
   } else {
      soln = timed.join(":");
   }
   return soln;
}

let ans = timeConversion("12:45:54PM");
console.log(ans);

