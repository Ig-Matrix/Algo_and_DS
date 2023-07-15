//In this challenge, you are required to calculate and print the sum of the elements in an array, 
//keeping in mind that some of those integers may be quite large.


function aVeryLargeSum(arr) {
    let sum = 0e10;
    arr.forEach(element => {
        sum +=element
    });

    return sum;
}

console.log(aVeryLargeSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));
