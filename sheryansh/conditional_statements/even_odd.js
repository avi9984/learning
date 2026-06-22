
/**
 *  Check number odd or even
 */
let prompt = require('prompt-sync')();

let x = Number(prompt("Enter the number: "))

if (x % 2 == 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
