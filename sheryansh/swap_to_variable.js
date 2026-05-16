let a = 10;
let b = 20;
console.log(a, b);


// a = a + b; // 10+20=30
// b = a - b; // 30-20=10
// a = a - b; // 30-10=20

// with destricutring method
// [a, b] = [b, a]

// with xor method
a = a ^ b;
b = a ^ b;
a = a ^ b


console.log(a, b);

