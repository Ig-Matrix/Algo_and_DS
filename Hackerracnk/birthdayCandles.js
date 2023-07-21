/**
 You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example

candles =[4,4,1,3]

The maximum height candles are  units high. There are  of them, so return .

Function Description

Complete the function birthdayCakeCandles in the editor below.

birthdayCakeCandles has the following parameter(s):

int candles[n]: the candle heights
Returns

int: the number of candles that are tallest 
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    let tallestCandle = [0];
    let tallestCandleArrray = [];
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] >= tallestCandle) {
            tallestCandle = candles[i];
            tallestCandleArrray.push(tallestCandle);
        }
    }

    return tallestCandleArrray.length;
}
console.log(birthdayCakeCandles([4, 2, 1, 4, 2]));
