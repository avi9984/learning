class Product{

    constructor(n,p,d){
        this.name=n;
        this.price=p;
        this.description=d
    }

    display(){
        // display the product
    }
}

const p=new Product("Bag",100,"A new cool bag")
console.log(p);
