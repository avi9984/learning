import {readFile, writeFile} from "fs/promises";

console.log(import.meta.url);

const filePath=new URL('./index.html', import.meta.url);
let contents=await readFile(filePath,{encoding:'utf-8'});

const data= {
    name:"John Doe",
    company:"Phonepe",
    age:25
}

for(let {key, value} of Object.entries(data)){
    contents=contents.replace(`((${key}))`,value)
}

await writeFile(new URL('./newindex.html',import.meta.url),contents);