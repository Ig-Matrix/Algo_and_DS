function kangaroo(x1, v1, x2, v2) {
    // Write your code here

    if(v2 > v1 && x2 > x1 ) {
        return "NO"
    } else {
        return "YES"
    }

}

let ans = kangaroo(21, 6, 47, 3)
console.log(ans);