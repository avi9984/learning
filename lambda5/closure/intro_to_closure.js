
function process(){
    let i=0;

    function innerProcess(){
        i +=1
        return i
    }
    return innerProcess; // we are not calling the function just returning it.
}

let res=process()
console.log(res);

console.log("first time call the res",res());
console.log("second time call the res",res());
console.log("third time call the res",res());

