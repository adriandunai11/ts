"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, price, description = "") {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
    getInfo() {
        if (this.description !== "") {
            return `${this.name} (${this.price} Ft) - ${this.description}`;
        }
        else {
            return `${this.name} (${this.price} Ft)`;
        }
    }
}
exports.Product = Product;
