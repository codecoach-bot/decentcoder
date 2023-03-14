export class Product{
    title: string;
    price: number;

    constructor(t: string, p: number){
        this.title = t;
        this.price = p;

    }
    getInformation(){
        return [`Title: ${this.title}  Price: ${this.price}` ]
    }
}

