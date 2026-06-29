function fetchNextElement(array){
    let idx=0;
    function next(){
        if(idx===array.length){
            return undefined;
        }
        const nextElement=array[idx]
        idx++
        return nextElement;
    }
    return {next}
}

const automaticFatcher=fetchNextElement([99,12,13,11,10,9,8,1,2,3,4]);

console.log(automaticFatcher.next());
// console.log(automaticFatcher());
// console.log(automaticFatcher());
// console.log(automaticFatcher());

