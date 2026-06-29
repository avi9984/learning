// Print all the factors of a number.

function factors(n) {
    for (let i = 1; i <= n / 2; i++) {
        if (n % i == 0) {
            // proccess.stdout.write(i + " ") //jab humko same line me value print krna hota hai
            process.stdout.write(i + " ");
        }
    }
    process.stdout.write(n + "");
}
factors(6);
