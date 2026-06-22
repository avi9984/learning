console.log(1<2<3);//-> (1<2)=true-> true<3 -> 1<3-> true
console.log(3>2>1);//->(3>2)=true-> true>1->1>1-> false


let x=NaN;
console.log(x==NaN);// false

console.log(isNaN(x)); //true

console.log(isNaN("avi"));//true (isNaN converts the incoming input to a number

console.log(Number.isNaN("avi")); // false

console.log(Number.isNaN(x)); // true


if(typeof(x)=='number' && x !==x){
    console.log(true);
    
}




