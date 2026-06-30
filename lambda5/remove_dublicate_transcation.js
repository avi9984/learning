// Write a function to remove duplicate transcations




function removeDuplicateTranscation(transcations) {
    let set = new Set();
    let res = [];

    for (let transcation of transcations) {
        if (!set.has(transcation.id)) {
            set.add(transcation.id)
            res.push(transcation)
        }
    }
    return res
}

const tran = [
    { id: 1 },
    { id: 2 },
    { id: 2 },
    { id: 3 }
]

console.log(removeDuplicateTranscation(tran));
