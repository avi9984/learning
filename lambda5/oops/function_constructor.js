function Product(n,p,d){
    this.name=n;
    this.price=p;
    this.description=d;
}

const p=new Product("Bag",1000, "a cool bags");
console.log(p);
