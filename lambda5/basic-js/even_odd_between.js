// DRY(Don't Repeat Yourself)
// Check which number is even or odd in between 1 to 50.


function isEvenOrOdd(num) {
    if (num % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

// console.log(("1 is ", isEvenOrOdd(1)));
// console.log(("2 is ", isEvenOrOdd(2)));
// console.log(("3 is ", isEvenOrOdd(3)));

for (let i = 1; i <= 50; i++) {
    console.log(i, "is", isEvenOrOdd(i))
}
