function countOccurrences(arr, char) {
    let count = 0;
    for (let str of arr) {
      count += (str.split(char).length - 1);
    }
    return count;
  }
  
  const arrayOfStrings = ["hello", "world", "hello", "again"];
  const charToCount = "o";
  const occurrences = countOccurrences(arrayOfStrings, charToCount);
  
  console.log(occurrences); // Output: 2
  