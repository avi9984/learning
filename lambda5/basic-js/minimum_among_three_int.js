//Consider three integer values, and find the minimum values among the given inputs
// e.g x=10, y=20, z=6
//output: 6

let x=100, y=30, z=99;

if(x<y && x< z){
    console.log(x);
}else if(y<x && y<z){
    console.log(y);
}else{
    console.log(z);
}