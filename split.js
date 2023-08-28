var number = 544;
let startDate = new Date(2023, 7, 26); // August is month 7 (0-indexed)
let currentDate = new Date();
// Calculate the difference in days
let daysElapsed = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

// Convertir el número en una cadena
var numberStr = daysElapsed.toString();

let numberOfDigits = numberStr.toString().length;
if (numberOfDigits <= 2) {
    if (numberOfDigits <= 1) {
        var digit1 = parseInt(numberStr.charAt(0));
        var digit2 = 0;
        var digit3 = 0;
    }else{
        var digit1 = parseInt(numberStr.charAt(0));
        var digit2 = parseInt(numberStr.charAt(1));
        var digit3 = 0; 
    }
  } else {
    var digit1 = parseInt(numberStr.charAt(0));
    var digit2 = parseInt(numberStr.charAt(1));
    var digit3 = parseInt(numberStr.charAt(2));
  }




console.log("Digit 1:", digit1);
console.log("Digit 2:", digit2);
console.log("Digit 3:", digit3);