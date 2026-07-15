class Product{
    #name;
    #price

    constructor(n,p,d){
        this.#name=n;
        this.#price=p;
        this.description=d;
    }

    set name(n){
        if(typeof n !=='string'){
            console.log("Invalid name passed");
            return
        }
        this.#name=n
    }

    get name(){
        return this.#name
    }
    
    setPrice(p){
        if(p<0)return 
        this.#price=p
    }

    display(){
        console.log(this.#name, this.#price, this.description)
    }
}


const p=new Product("Bag",100,"a cool bag");
p.name="I phone"
console.log(p);
console.log(p.name);
