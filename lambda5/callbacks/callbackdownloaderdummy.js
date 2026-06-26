function download(url, cb) {
    console.log("Started downloading after 5s");

    setTimeout(() => {
        console.log("Completed downaloding after 5s");
        const content = "ABCDEF";
        cb(content)
        cb(content)
    }, 5000)
}

download("www.xyz.com", (data) => {
    console.log("downaloded data is", data);

})