//write a function that returns the length of the array whose elements sum is the highest
function returnLengthOfLargestArray (a, b) {
    let sumA=0;
    let sumB=0;
    let largestArrlength =0
    
    a.forEach( num => {
        sumA +=num;
    })
    b.forEach( num => {
        sumB +=num;
    })
    if(sumA > sumB) {
        largestArrlength = a.length;
    } else if(sumB > sumA) {
        largestArrlength =b.length;
    }

    return largestArrlength;

}

console.log(returnLengthOfLargestArray([ 20],[1,18]));