/**
 * Problem: Move Zeroes
 * Description: Given an integer array nums, move all 0's to the end of it 
 * while maintaining the relative order of the non-zero elements.
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    let lastNonZeroFoundAt = 0;
    
    // Move all non-zero elements to the front of the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZeroFoundAt] = nums[i];
            lastNonZeroFoundAt++;
        }
    }
    
    // Fill the remaining positions with 0
    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0;
    }
}

// Test case
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // [1, 3, 12, 0, 0]


/*
 * Problem: Fizz Buzz
 * Description: Given an integer n, return a string array answer where:
 * - answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * - answer[i] == "Fizz" if i is divisible by 3.
 * - answer[i] == "Buzz" if i is divisible by 5.
 * - answer[i] == i (as a string) if none of the above conditions are true.
 * 
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
    const result = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }
    
    return result;
}
console.log(fizzBuzz(15)); 
// Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]