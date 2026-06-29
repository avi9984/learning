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

async function steps() {
    const downloadedData = await donwaload("www.xyz.com");
    console.log("Data downloaded is", downloadedData);

    const fileWritten = await writeFile(downloadedData)
    console.log("File written is", fileWritten);

    const uploadResponce = await uploadData(fileWritten);
    console.log("upload responce is", uploadResponce);

    return uploadResponce;
}

steps();
console.log("end");
