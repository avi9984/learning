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

function doAfterReceving(value) {
    iter.next(value)
}

function* steps() {
    const downloadedData = yield donwaload("www.xyz.com");
    console.log("Data downloaded is", downloadedData);

    const fileWritten = yield writeFile(downloadedData)
    console.log("File written is", fileWritten);

    const uploadResponce = yield uploadData(fileWritten);
    console.log("upload responce is", uploadResponce);

    return uploadResponce;
}

const iter = steps();
const future = iter.next();

future.value.then(doAfterReceving)