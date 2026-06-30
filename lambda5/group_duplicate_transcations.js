// Write a function to group the duplicate trancations

function groupTranscations(trancations){
    return trancations.reduce((acc,curr)=>{
        let res=curr.name;

        if(!acc[res]){
            acc[res]=[]
        }
        acc[res].push(curr)
        return acc
    },{})
}

const transcation=[
{name:"Rahul",amount:200},
{name:"Rahul",amount:100},
{name:"Amit",amount:500}
]
console.log(groupTranscations(transcation));
