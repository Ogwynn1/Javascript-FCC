/*
// Only change code below this line

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
*/

// Only change code below this line
class Thermostat {
    constructor(fahrenheit) {
      this._fahrenheit = fahrenheit;
    }
  
    get temperature() {
      return 5 / 9 * (this._fahrenheit - 32);
    }
  
    set temperature(celsius) {
      this._fahrenheit = celsius * 9.0 / 5 + 32;
    }
  }
  // Only change code above this line
  
  // Creating a new instance of the Thermostat class
  const thermos = new Thermostat(76); // The constructor sets the initial temperature to 76 degrees Fahrenheit.
  
  // Using the getter to obtain the temperature in Celsius
  let temp = thermos.temperature; // This calls the getter and retrieves the temperature in Celsius.
  
  // Using the setter to set the temperature in Celsius
  thermos.temperature = 26; // This sets the temperature to 26 degrees Celsius.
  
  // Getting the updated temperature in Celsius
  temp = thermos.temperature; // Retrieves the updated temperature in Celsius after setting it in the previous step.