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

    process.nextTick(() => {
        console.log("next tick cb from timeout");
    });

}, 0);

process.nextTick(() => {
    console.log("next tick cb");
});


