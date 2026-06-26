function getRandomInt(max) {
    return Math.floor(Math.random() + max)
}

function createPromisWithTimeout() {
    return new Promise(function executor(resolve, reject) {
        console.log("Entering executor callback in the promise constructor");

        setTimeout(function () {
            let num = getRandomInt(10);

            if (num % 2 == 0) {
                resolve(num)
            } else {
                reject(num)
            }
        }, 10000);
        console.log("Exitting the executor callback in the promise controctor");

    });
}

console.log("Starting...");
const p = createPromisWithTimeout();

console.log("We are now waitng for the promise is complete");
console.log("Executing my promise object is like", p);

p.then(
    function fulfillHnader(value) {
        console.log("Inside fulfill handler with value", value);

    },
    function rejecionHandler(value) {
        console.log("Inside rejection handler with value", value);
    }
)
