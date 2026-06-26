//1. Write a function to downaload data from a url
//2. write a function to save that download data in a file and return the filename.
//3. Write a function to upload the file written in previous step to a newurl.
//(only use promices)


function downaload(url) {
    return new Promise((resolve, reject) => {
        console.log("Starting to downaload data from", url);
        setTimeout(() => {
            console.log("Completed downloding from the ", url);
            const content = "ABCDE";
            resolve(content)
        }, 5000)
    })

}


function writeFile(data) {
    return new Promise((resolve, reject) => {
        console.log("Started writing a file with", data);
        setTimeout(() => {
            console.log("Completed writeing the data in a file");
            const filename = "abc.txt";
            resolve(filename)
        }, 5000)
    })
}


function upload(url, file) {
    return new Promise((res, rej) => {
        console.log("Started uploading", file, "on", url);

        setTimeout(() => {
            console.log("upload completed");
            const responce = "success";
            res(responce)
        }, 2000);
    })
}

downaload("www.xyz.com")
    .then((value) => {
        console.log("Downloaing done with following vaule", value);
        return writeFile(value)
    })
    .then((value) => {
        console.log("Data written in the file name", value);
        return upload(value, "www.upload.com")
    })
    .then((value) => {
        console.log("we have uploaded with", value);
    })