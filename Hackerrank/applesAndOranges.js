/**LINK: https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
   // Write your code here
   let diffApples = apples.map((apple) => a + apple);
   let diffOranges = oranges.map((orange) => b + orange);
   let countA = 0;
   let countO = 0;
   while (s <= t) {
      for (let i = 0; i < diffApples.length; i++) {
         if (s === diffApples[i]) {
            countA++;
         }
      }
      for (let i = 0; i < diffOranges.length; i++) {
         if (s === diffOranges[i]) {
            countO++;
         }
      }
      s++;
   }
  console.log(countA);
  console.log(countO);
}

let ans = countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
console.log(ans);
