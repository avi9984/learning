/**
 * Abstract equality operator(==)
 * If Type(x) is the same as Type(y), then
 *  a. Return the result of performing like(===) 
 * == use type cohesion
 */

console.log(null == undefined); // true

console.log(12 == "12");// true

console.log(false == "0") //true
/*
x -> boolean -> ToNumber -> false -> 0
x=0, y="0", x==y
y-> ToNumber-> 0
0 == 0 -> true
*/

console.log(null == false);
/**
 * y -> is a boolan -> ToNumber -> 0
 * null == 0
 * false
 */

/**
 * Strict Equality Comparision(===)
 */

console.log(2 === "2");//false

console.log(null === NaN);//false
console.log("NaN" === NaN);//false

let obj = { x: 10, valueOf() { return 100 } };

console.log(90 == obj);// false
console.log(100 == obj); // true

console.log(0 === -0); //true

let obj1 = { x: 10 }
let obj2 = { x: 10 }
let obj3 = { y: 10 }

console.log(obj1 ==obj2);// false (because different memory location
console.log(obj2 ===obj3);
console.log(obj1 ===obj1);








