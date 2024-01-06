// LINK TO CHALLENGE: https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true

/**------------SOLUTION ONE-------------- */
// The idea is based on getting the n term where both kangaroos will meet and checking if it is a whole number
// The equation is nth=a + (n-1)d
function kangaroo(x1, v1, x2, v2) {
   // Write your code here
   if (v2 > v1) {
      return "NO";
   }

   if (((x2 - x1) / (v2 - v1) + 1) % 1 === 0) {
      return "YES";
   } else {
      return "NO";
   }

   //    if (v2 < v1) {
   //     if (((x2 - x1) / (v2 - v1) + 1) % 1 === 0) {
   //        return "YES";
   //     } else {
   //        return "NO";
   //     }
   //  } else {
   //     return "NO";
   //  }
}

let ans = kangaroo(0,2,5,3 );
console.log(ans);

/**------------SOLUTION TWO-------------- */

const Kangaroo = (x1, v1, x2, v2) => {
    let i = 0;
    while (i < 10000) {
       if (x1 === x2) {
          return "YES";
       }
 
       x1 = x1 + v1;
       x2 = x2 + v2;
 
       i++;
    }
    return "NO";
 };
 
 let soln = Kangaroo(21, 6, 47, 3);
 console.log(soln);


// TEST CASES
// 14, 4, 98, 2 =YES
// 21, 6, 47, 3 = NO
// 0,2,5,3 =NO
// 0,3,4,2 =YES
// 35, 1, 45, 3 =NO
