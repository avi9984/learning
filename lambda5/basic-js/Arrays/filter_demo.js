/**
 * Filter function
 * Filter is also a higher order function, 
 * Filter also loop over the array element there is one special thing about filter, i.e., the argument function f which we have to pass inside filter should always return a boolean, otherwise output will be converted to a boolean.
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function oddOrEven(x) {
    return (x % 2 == 0)
}

let res=arr.filter(oddOrEven)
console.log(res);
