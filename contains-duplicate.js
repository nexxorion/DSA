/**
 * Problem: Contains Duplicate
 * Description: Returns true if any value appears at least twice in the array, 
 * and false if every element is distinct.
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    const seen = new Set();
    
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    
    return false;
}
