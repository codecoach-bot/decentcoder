"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
    getInformation() {
        return [`Title: ${this.title}  Price: ${this.price}`];
    }
}
exports.Product = Product;
