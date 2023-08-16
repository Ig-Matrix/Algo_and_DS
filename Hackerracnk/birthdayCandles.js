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
    let tallestCandle = candles[0];
    let count = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > tallestCandle) {
            tallestCandle = candles[i];
        }
        if (candles[i] === tallestCandle) {
            count++;
        }
    }

    return count;
}
console.log(birthdayCakeCandles([4, 2, 1, 4,2,2, 2]));
