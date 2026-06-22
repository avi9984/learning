//Check years is leap years or not.

let year = 2020;

function isLeapYear(num) {
    if (num % 4 == 0 && num % 100 !== 0) {
        console.log(`${num} is leap year`);
    } else if (num % 400 == 0) {
        console.log("Leap year");
    } else {
        console.log("Not leap year");
    }
    return num;
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2024));
console.log(isLeapYear(1400));

