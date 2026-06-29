// Write a function the sum of all even & odd numbers in a range separetely

function sum(even, odd){
    let evenSum=0;
    let oddSum=0;
    if(even>odd){
        [even, odd]=[odd, even]
    }

    for(let i=even; i<=odd; i++){
        if(i % 2==0){
            evenSum +=i;
        }else{
            oddSum +=i;
        }
    }
    return [evenSum, oddSum];
}

console.log(sum(5,10));
