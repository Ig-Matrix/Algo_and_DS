/* if two words or phrases are anagrams of each other, they have the same set of letters, but in a different order. 
 * For example, "listen" and "silent" are anagrams of each other because you can rearrange the letters to form 
 * the other word.
Example:

Anagram: "listen" and "silent"
Not Anagrams: "hello" and "world"

Write a function that returns true if two words are anagrams
 */

function isAnagram(strOne, strTwo) {
    let lowercaseStrOne = strOne.toLowerCase(),
        lowercaseStrTwo = strTwo.toLowerCase();

    let convStrOne = lowercaseStrOne.split("").sort().join(""),
        convStrTwo = lowercaseStrTwo.split("").sort().join("");

    if (convStrOne === convStrTwo) {
        return true;
    } else {
        return false;
    }
}

console.log(isAnagram("silent", "Listen"));


