/*
Higher Order Functions:

These are functions that dependes & operate on the other functions. Higher order functions take another function as an argument and then execute logic.
*/
// map function

function square(el) {
    return el * el
}


function isEvenOrOdd(num) {
    if (num % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

const arr = [1, 2, 3, 4, 5];

const result = arr.map(square)
// console.log(result);

const evenodd = arr.map(isEvenOrOdd)
// console.log(evenodd);

/*
*When to use maps?
*In any situtation when we have to do an opration on every element of the array and store the result of each opration map can be a good option

*For example:
*Array of product objects
*/

const newArr = [9, 8, 7, 6, 5];

function print(element, idx) {
    return `Element at inde ${idx} is ${element}`
}

const result2 = newArr.map(print);
// console.log(result2);


function customMapper(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i], i))
    }
    return result
}
const value = customMapper(newArr, print)
// console.log(value);


/**
 * Filter function
 */
function oddOrEven(x) {
    return (x % 2 == 0)
}
const flterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterRes = flterArr.filter(oddOrEven)
// console.log(filterRes);

/**
 * Reduce function
 * 
 */
const arr1 = [1, 2, 3, 4, 5, 6];
function sum(prevResult, currValue) {
    console.log(prevResult, currValue);
    return prevResult + currValue;
}

const result3 = arr1.reduce(sum)
console.log(result3);

