//Task
//1. Write a function to downaload data from a url
//2. write a function to save that download data in a file and return the filename.
//3. Write a function to upload the file written in previous step to a newurl.

function downaload(url, cb) {

    console.log("Starting to downaload data from", url);
    setTimeout(() => {
        console.log("Downloading completed");
        const content = "ABCD";
        cb(content)
    }, 4000);
}


function writeFile(data, cb) {
    console.log("Started writing a file with", data);

    setTimeout(() => {
        console.log("Completed writing the data in a file");
        const filename = "file.txt";
        cb(filename)

    }, 5000)

}


function upload(url, file, cb) {
    console.log("Started uploading", file, "on", url);
    setTimeout(() => {
        console.log("uploading completed");
        const responce = "success";
        cb(responce)
    }, 2000)

}

// downaload("www.xyz.com", (content) => {
//     console.log("Downaloading data", content);
// })

// writeFile("abcddjfsd",(name)=>{
//     console.log("file written with name",name);
// });

// upload("www.xyz.com","abddshdf",(responce)=>{
//     console.log("uploading file", responce);

// })

downaload("www.xyz.com", (content) => {
    console.log("We are donaload the rpocess", content);
    writeFile(content, (filename) => {
        console.log("We are donaloaning and write file", filename);
        upload("www.uploaded.com", filename, (responce) => {
            console.log("We have uploaded with", responce);
        });
    });
});