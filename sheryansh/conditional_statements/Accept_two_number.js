/**
 * Q: Accept two numbers and print the greatest between them.
 */

function acceptTwoNumber(num1, num2) {
    if (num1 > 80 && num2 <= 86) {
        console.log("Excelent");
    } else if (num1 > 70 && num2 <= 80) {
        console.log("Good");

    } else {
        console.log("Failed");
    }
}

console.log(acceptTwoNumber(10, 50));

