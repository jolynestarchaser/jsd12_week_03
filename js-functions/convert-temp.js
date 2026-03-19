import readline from "readline";

// Camel case -> celsiusToFahrenheit -> JS functions
// Pascal case -> CelsiusToFahrenheit -> React components

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your temperature:", function (tempInput) {
  const temp = parseFloat(tempInput);
  rl.question("Enter unit (C or F):", function (unitInput) {
    const unit = unitInput.trim().toUpperCase();

    let result;

    // if statement
    if (unit === "C") {
      result = celsiusToFahrenheit(temp);
      console.log(`${temp}C is ${result.toFixed(2)}F`);
    } else if (unit === "F") {
      result = fahrenheitToCelsius(temp);
      console.log(`${temp}F is ${result.toFixed(2)}C`);
    } else {
      console.log(`Invalid unit! Please enter C or F.`);
    }
    rl.close();
  });
});
