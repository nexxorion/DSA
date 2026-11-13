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