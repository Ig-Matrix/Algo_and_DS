function camelcase(s) {
   // Write your code here
   let count = 1;
   let sArray = s.split("");
   for (let i = 0; i < sArray.length; i++) {
      const letter = sArray[i];
      if (letter === letter.toUpperCase()) count++;
   }
   return count;
}

let ans = camelcase("saveChangesInTheEditor");
console.log(ans);
