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