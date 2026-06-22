let prompt = require('prompt-sync')();
let age = Number(prompt("Enter your age: "))

if (age >= 18) {
    console.log("Valid voter");
} else {
    console.log("You are not valid voter");
}

