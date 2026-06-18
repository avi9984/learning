/**
 * Reduce is a higher order function avilabe for arrays.
 * Reduce also taks a function f as an argument, what reudce does is, it one by one goes to every element of the array, say the current element is arr[i]
 * Reduce will pass this element to the function f, and accumulate the result of futher function calls with this particular result.
 */

const arr = [1, 2, 3, 4, 5, 6];
function sum(prevResult, currValue) {
    console.log(prevResult, currValue);
    return prevResult + currValue
}

const result = arr.reduce(sum)
console.log(result);

//Real life example add to card here work reduce

let cart = [
    { price: 100000, name: "iphone" },
    { price: 500, name: "backcover" },
    { price: 200, name: "tempard glass" },
]

function addPrices(prevResult, currValue) {
    console.log(prevResult, currValue);
    let newPrice = prevResult.price + currValue.price
    // console.log(newPrice, "price");

    return { price: newPrice }
}

const totalPrice = cart.reduce(addPrices);
console.log(totalPrice.price);


