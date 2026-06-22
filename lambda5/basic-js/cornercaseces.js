//ToString -> ""+value

console.log(""+0);// 0 -> "0"
console.log(""+(-0));// 0 -> "0"

console.log(""+[]);//[]-> ""(empty string)

console.log(""+{}); //{}-> [object Object]

console.log(""+[1,2,3]); //[1,2,3]-> 1,2,3

console.log(""+[null,undefined]);// [null,undefined]-> ,

console.log(""+[1,2,null,4]);//[1,2,null,4]->1,2,,4

// ToNumber

console.log(0-"010");// -10(convert to decimal number)
console.log(0 - "O10"); // NaN
console.log(0 - 0o10); //-8(convert to octal number)
console.log(0 - "0xb"); // -11(convert to hexadecimal number)
console.log(0 - 0xb); // -11

console.log([] -1);//-1
console.log([""] -1); //-1







