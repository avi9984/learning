function donwaload(url, time) {
    return new Promise((resolve, reject) => {
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDE";
            if (time > 1000) {
                reject("err")
            } else {
                resolve(content);
            }
        }, time);
    });
}

const p1 = donwaload("www.abc1.com",5000)
const p2 = donwaload("www.abc2.com",1000)
const p3 = donwaload("www.abc3.com",3000)

Promise.all([p1, p2, p3]).then((value) => {
    console.log("promise all values", value);
})