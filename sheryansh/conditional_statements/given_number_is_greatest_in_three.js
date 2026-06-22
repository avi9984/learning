// Check which number is greatest among three

let a = 25;
let b = 20;
let c = 15;

if (a > b && a > c) {
    console.log("A is greatest");
} else if (b > a && b > c) {  // Changed: b > a && b > c
    console.log("B is greatest");
} else {
    console.log("C is greatest");
}