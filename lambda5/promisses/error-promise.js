function donwaload(url) {
    return new Promise((resolve, reject) => {
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDE";
            resolve(content);
        }, 5000);
    });
}

function writeFile(data) {
    return new Promise((resolve, reject) => {
        console.log("Starting writting a file with", data);
        setTimeout(() => {
            console.log("Compeleted writing the data in a file");
            const filename = "file.txt";
            resolve(filename)
        }, 4000)
    });
}

function uploadData(file, url) {
    return new Promise((resolve, reject) => {
        console.log("Starting uploading", file, "on", url);
        setTimeout(() => {
            console.log("upload completed");
            const responce = "Success";
            resolve(responce)
        }, 2000)
    })
}

donwaload("www.xyz.com")
    .then((value) => {
        console.log("downloading done with following value", value);
        return writeFile(value)
    })
    .then((value) => {
        console.log("Data written in the file with name", value);
        return uploadData(value, "www.upload.com");
    })
    .then((value) => {
        console.log("we have uploaded with", value);

    })
    .catch((err) => {
        console.log("Caching error", err);
    })
    .finally(() => {
        console.log("finaly run");

    })