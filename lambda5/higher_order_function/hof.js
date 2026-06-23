// Higher order function: There are functions which take another function as arguments there are called higher order function

function f(x, fn){

    console.log(x);
    console.log(fn);
    fn()
}

f(10, function exec(){
    console.log("I am an expression passed to a HOF");
})