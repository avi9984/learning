const fs = require('fs');

console.log("Hello World");

fs.readFile("readme.md", 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return
    }
    console.log(data);
});

setTimeout(() => {
    console.log("Hello word from timeout");
}, 0);

for (let i = 0; i < 1000000000; i++) { }

setImmediate(() => {
    console.log("Hello word write from setimmediate");

})


