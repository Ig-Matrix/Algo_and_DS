/*Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000
Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers*/ 


const  arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    let positive =[],
        negative =[],
            zero =[];
    arr.forEach(element => {
        if(element < 0) {
            negative.push(element)
        } else if (element > 0) {
            positive.push(element)
        } else zero.push(element)
    });

    positive = positive.length / arr.length;
    positive =positive.toFixed(6)
    negative = negative.length / arr.length;
    negative =negative.toFixed(6)
    zero = zero.length / arr.length;
    zero =zero.toFixed(6)
    console.log(positive);
    console.log(negative);
    console.log(zero);

}


// console.log(plusMinus([-4, 3, -9, 0, 4, 1]));