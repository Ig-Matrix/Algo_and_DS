/*Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference*/ 

function diagonalDifference(arr) {
    // Write your code here
    let leftDiagonalSum =0,
        rightDiagonalSum =0;
    for(let i =0; i< arr.length; i++) {
        leftDiagonalSum += arr[i][i];
        rightDiagonalSum += arr[i][arr.length - i -1];
    }
    let difference = Math.abs(leftDiagonalSum - rightDiagonalSum)
    return difference; 
}

console.log(diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
]));





//Practice using a single array
let myAr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let leftDiagonalIndexes = [0, 4, 8];
let rightDiagonalIndexes = [2, 4, 6];

// console.log(myAr[0].length);
let leftDiagonal = myAr.filter((el, index) => {
    return leftDiagonalIndexes.includes(index);
});
let rightDiagonal = myAr.filter((el, index) => {
    return rightDiagonalIndexes.includes(index);
});

// console.log(leftDiagonal);
// console.log(rightDiagonal);
const total = [...leftDiagonal, ...rightDiagonal];

// console.log(total);
sum = 0;
for (let i = 0; i < total.length; i++) {
    sum = sum + total[i];
}

// console.log(sum);
// console.log(leftDiagonal);



// function diagonalDifference(arr) {
//     let leftDiagonalIndexes = [0, 4, 8];
//     let rightDiagonalIndexes = [2, 4, 6];
//     const leftDiagonal = arr.filter((element, index) => {
//         return leftDiagonalIndexes.includes(index);
//     })
//     const rightDiagonal =arr.filter((element, index) => {
//         return rightDiagonalIndexes.includes(index);
//     })
//     console.log(leftDiagonal);
//     let sumLeft=0
//     let sumRight=0
//     for (let i=0; i<leftDiagonal.length; i++) {
//         sumLeft +=leftDiagonal[i];
//     }
//     for (let i=0; i<rightDiagonal.length; i++) {
//         sumRight +=rightDiagonal[i];
//     }
//     let difference = Math.abs(sumLeft - sumRight);
//     return difference ;
// }

// console.log(diagonalDifference([11, 2, 4, 4, 5, 6, 10, 8, -12]));

// const fucknArr = [
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12],
// ];


//Factorial function
const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

console.log(factorial(4));