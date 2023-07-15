/*Given an array of integers, find the sum of its elements.

For example, if the array , , so return .

Function Description

Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

simpleArraySum has the following parameter(s):

ar: an array of integers */

//Using for each method
function simpleArraySum(ar) {
    let sum = 0;
    ar.forEach((num) => {
        sum = sum + num;
    });

    return sum;
}

//Using for loop
function simpleArraySum2(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
