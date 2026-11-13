/**
 * Problem: Valid Anagram
 * Description: Returns true if string t is an anagram of s, and false otherwise.
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const count = {};
    
    // Count frequencies of characters in string s
    for (const char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    
    // Subtract frequencies using string t
    for (const char of t) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }
    
    return true;
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));         // false


// New DSA Problem 

/**
 * Problem: Single Number
 * Description: Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * 
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    let result = 0;
    
    // XORing a number with itself results in 0. 
    // All duplicate numbers will cancel each other out, leaving only the single number.
    for (const num of nums) {
        result ^= num;
    }
    
    return result;
}

// Test cases
console.log(singleNumber([2, 2, 1]));       // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4