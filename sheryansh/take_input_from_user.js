const prompt = require('prompt-sync')();  // Note the () at the end

function checkAge(age) {
    if (age >= 18) {
        console.log("You are eligible to vote");
    } else {
        console.log("Not eligible");
    }
}

let age = prompt("Enter your age: ");  // First get input
checkAge(age);  // Then pass it to the function