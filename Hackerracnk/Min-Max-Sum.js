/**Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
 * Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example

The minimum sum is  and the maximum sum is . The function prints
16 24


Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):

arr: an array of  integers
Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

Input Format

A single line of five space-separated integers. */

//SOLUTION

function miniMaxSum(arr) {
    // Write your code here
    let sumA = 0,
        sumB = 0,
        sumC = 0,
        sumD = 0,
        sumE = 0;
    let arrSum = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[0]) {
            sumA = arr[1] + arr[2] + arr[3] + arr[4];
            arrSum.push(sumA);
        } else if (arr[i] === arr[1]) {
            sumB = arr[0] + arr[2] + arr[3] + arr[4];
            arrSum.push(sumB);
        } else if (arr[i] === arr[2]) {
            sumC = arr[0] + arr[1] + arr[3] + arr[4];
            arrSum.push(sumC);
        } else if (arr[i] === arr[3]) {
            sumD = arr[0] + arr[1] + arr[2] + arr[4];
            arrSum.push(sumD);
        } else if (arr[i] === arr[4]) {
            sumE = arr[0] + arr[1] + arr[2] + arr[3];
            arrSum.push(sumE);
        }
    }
    let largestSum = arrSum[0],
        smallestSum = arrSum[0];
    for (let i = 0; i < arrSum.length; i++) {
        if (arrSum[i] > largestSum) {
            largestSum = arrSum[i];
        }
        if (arrSum[i] < smallestSum) {
            smallestSum = arrSum[i];
        }
    }

    console.log(`${smallestSum} ${largestSum}`);
}

miniMaxSum([7, 69, 2, 221, 8974]);

//ALTERNATIVELY
// function miniMaxSum(arr) {
//     let sum = 0;
//     let smallestNum = arr[0];
//     let largestNum = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         if (arr[i] < smallestNum) {
//             smallestNum = arr[i];
//         }
//         if (arr[i] > largestNum) {
//             largestNum = arr[i];
//         }
//     }

//     const smallestSum = sum - largestNum;
//     const largestSum = sum - smallestNum;

//     console.log(`${smallestSum} ${largestSum}`);
// }
// miniMaxSum([1, 2, 3, 4, 5]);