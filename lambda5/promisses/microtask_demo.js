function createPromise() {
    return new Promise(function exec(resolve, reject) {
        console.log("Resolving the promise");
        resolve("Done")
    })
}

setTimeout(function process() {
    console.log("Time comleted");
}, 0);

let p = createPromise();
p.then(function fulfillHnader(value) {
    console.log("We fulfiled with a value", value);

}, function rejecionHandler() { });

console.log("ending");
