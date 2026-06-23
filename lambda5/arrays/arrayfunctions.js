/**
 * Map functions: Map is a higher order function and iterate with every element and return new array and also do not change the original array
 */

function square(el){
    return el*el;
}

const arr=[1,2,3,4,5];

const result=arr.map(square);
console.log(result);

function cube(x){
    return x*x*x;
}

const resultCub=arr.map(cube)
console.log(resultCub);

function isEvenOrOdd(x){
    if(x % 2==0){
        return "Even"
    }else{
        return "Odd"
    }
}

const evenodd=arr.map(isEvenOrOdd);

console.log(evenodd);

let arr1=[1,10, 9, 100, 1000, 12,11, 13, 14,2, 3]

arr1.sort(function(a,b){
    return a-b;
});

console.log(arr1);
