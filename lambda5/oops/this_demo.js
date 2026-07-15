let iphoe={
    name:"Iphone 13 pro",
    price:100000,
    description:"The new iphone 13 pro",
    rating: 4.9,

    display(){
        console.log("first calling",this);
    }
}
let makbook={
    name:"Mackbook new",
    price:125000,
    description:"The new mackbook",
    rating: 4.9,

    display(){
        console.log("second calling",this);
    }
}

iphoe.display();
makbook.display();