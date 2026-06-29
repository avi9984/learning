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

async function steps(){
    try {
        console.log("Starting steps");
        const downloadedData=await donwaload("www.xyz.com");
        return downloadedData;
    } catch (error) {
        console.log("we have handled the error",error);
        
    }finally{
        console.log("finaly ending");
    }
}

steps();