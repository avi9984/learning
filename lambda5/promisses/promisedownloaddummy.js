function download(url) {
    console.log("Started downloading content from", url);

    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Completed downloading data in 5s");
            const content = "ABCDE"
            res(content);
            res(content);
            res(content);// only excute one time not run every time but callback every time run
        }, 5000);
    })
}

download("www.xyz.com")
    .then((value) => {
        console.log("Content downlaoded is", value);
    })