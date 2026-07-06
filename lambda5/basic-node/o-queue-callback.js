const fs = require('fs');

fs.readFile('./readme.md', 'utf-8', (err, data) => {// I/O queue -Callback queue
    if (err) {
        console.error(err)
        return;
    }
    console.log(data);
})

process.nextTick(() => console.log("Next tick"));
Promise.resolve().then(() => console.log("Promise 1"));
setTimeout(() => console.log("timer 1"), 0);

for (let i = 0; i < 10000; i++) { }