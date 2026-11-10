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


function convertCelsiusToFahrenheit() {
  // Prompt the user to enter a temperature in Celsius
  let celsius = prompt("Please enter the temperature in Celsius:");
  
  // Convert the input to a number in case it's a string
  celsius = Number(celsius);
  
  // Check if the input is a valid number
  if (!isNaN(celsius)) {
    // Convert the temperature to Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;
    
    // Display the converted temperature
    alert(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F.`);
  } else {
    // Inform the user if the input was not a valid number
    alert("Please enter a valid number for the temperature.");
  }
}

// Call the function to execute
convertCelsiusToFahrenheit();