/**
 * Function Description

Complete the breakingRecords function in the editor below.

breakingRecords has the following parameter(s):

    int scores[n]: points scored per game

Returns

    int[2]: An array with the numbers of times she broke her records. Index 

is for breaking most points records, and index 1 is for breaking least points records.

Input Format

The first line contains an integer n, the number of games. 

LINK: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true
 */


/**--------------------SOLUTION--------------- */
function breakingRecords(scores) {
    // Write your code here
    let lowCount =0;
    let highCount =0;
    let lows=scores[0]
    let highs=scores[0]
    for (let i = 0; i < scores.length; i++) {
        const score = scores[i];
        if(score < lows) {
            lows=score;
            lowCount++
        }
        if(score > highs) {
            highs=score;
            highCount++
        }
    }
    return [highCount, lowCount];
}

let ans = breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])
console.log(ans);
