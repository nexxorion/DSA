/**
 * Problem: Valid Palindrome
 * Description: Checks if a string is a palindrome, considering only alphanumeric characters and ignoring cases.
 * 
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    // 1. Remove non-alphanumeric characters and convert to lowercase
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // 2. Use two pointers to check from both ends inwards
    let left = 0;
    let right = cleaned.length - 1;
    
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car"));                     // false

/**
 * Problem: Reverse String
 * Description: Reverses an array of characters in-place (or a string converted to an array).
 * 
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Swap characters using destructuring
        [s[left], s[right]] = [s[right], s[left]];
        
        left++;
        right--;
    }
}

// Test case
const arr = ["h", "e", "l", "l", "o"];
reverseString(arr);
console.log(arr); // ["o", "l", "l", "e", "h"]
