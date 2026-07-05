Promise.resolve().then(() => console.log("Receving processs 1"));
process.nextTick(() => console.log("Process.nextTick 1"));
setTimeout(() => {
    console.log("Timer 1 done");
}, 0);
process.nextTick(() => console.log("Process.nextTick 2"));