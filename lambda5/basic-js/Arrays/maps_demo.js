/**
 * When to use maps?
 * In any situation when we have to do an opration on every element of the array and store the result of each opration map can be a good option
 * For example
 * Array of product objects
 */

const newArr=[9,8,7,6,5];

function print(element, idx){
    return `Element at index ${idx} is ${element}`
}

const result=newArr.map(print)
console.log(result);

function customMapper(arr,func){
    let res=[];
    for(let i=0; i<arr.length; i++){
        res.push(func(arr[i],i))
    }
    return res
}

const value=customMapper(newArr,print)

console.log(value);
