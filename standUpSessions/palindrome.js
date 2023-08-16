/**A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward
 *  (ignoring spaces, punctuation, and capitalization). In other words, if you reverse the order of the characters, 
 * the result will still be the same. For example, "radar" and "madam" are palindromic words.
 * Example:

Palindrome: "radar"
Not Palindrome: "hello"
 * Write a function that returns true if a word is a palindrome or false if it is not
 */

const isPalindrome = (word) => {
    let lowerCaseWord = word.toLowerCase()
    let convWord = lowerCaseWord.split("").reverse().join("");
    if (word === convWord)
        return  true;
    else return false;
};
console.log(isPalindrome("radar"));
