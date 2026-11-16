// MOVE ZEROS 


function moveZeroes(nums) {
    let lastNonZero = 0;

    // Move non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[lastNonZero] = nums[i];
            lastNonZero++;
        }
    }

    // Fill remaining positions with zeroes
    while (lastNonZero < nums.length) {
        nums[lastNonZero] = 0;
        lastNonZero++;
    }
}

// Example
const nums = [0, 1, 0, 3, 12];

moveZeroes(nums);

console.log(nums); // [1, 3, 12, 0, 0]


/**
 * Problem: Fizz Buzz
 * Return an array containing:
 * - "FizzBuzz" for multiples of 3 and 5
 * - "Fizz" for multiples of 3
 * - "Buzz" for multiples of 5
 * - Number as a string otherwise
 *
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(String(i));
        }
    }

    return result;
}

// Example
console.log(fizzBuzz(15));

// Output:
// ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7",
//  "8", "Fizz", "Buzz", "11", "Fizz", "13",
//  "14", "FizzBuzz"]
