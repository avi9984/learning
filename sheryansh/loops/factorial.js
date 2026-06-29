// write a function factorail take a number as input and print the factorial

function factorial(n){

    if(n==0) return 1;
    let fact=1;

    for(let i=1; i<=n; i++){
        fact=fact*i
    }
    return fact
}

console.log(factorial(4));
