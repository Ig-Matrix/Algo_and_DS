/**
 You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. 
 They will only be able to blow out the tallest of the candles. tallestCandleArr how many candles are tallest.

Example

candles =[4,4,1,3]

The maximum height candles are 4 units high. There are 2 of them, so return 2.

Function Description

Complete the function birthdayCakeCandles in the editor below.

birthdayCakeCandles has the following parameter(s):

int candles[n]: the candle heights
Returns
-int: the number of candles that are tallest 
*/


function birthdayCakeCandles(candles) {
    // Write your code here
    let sortedArr = candles.sort((a, b) => b - a)
    let tallestCandle = sortedArr[0];
    let tallestCandleArr = [];
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] >= tallestCandle) {
            tallestCandle = sortedArr[i];
            tallestCandleArr.push(tallestCandle);
        }
    }

    return tallestCandleArr.length;
}
let ans = birthdayCakeCandles([4, 2, 1, 4, 5, 8, 8, 2, 2, 2]);
console.log(ans);
