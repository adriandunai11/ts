"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
class Inventory {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
        console.log(`Termék hozzáadva: ${product.name}`);
    }
    removeProduct(id) {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
            }
        }
        if (index === -1) {
            console.log(`Nem található termék ezzel az ID-val: ${id}`);
        }
        else {
            const removedProduct = this.products[index];
            this.products.splice(index, 1);
            console.log(`Termék eltávolítva: ${removedProduct.name}`);
        }
    }
    findProduct(searchText) {
        for (const product of this.products) {
            if (product.id === searchText || product.name === searchText) {
                return product;
            }
        }
        return undefined;
    }
    isAvailable(productId) {
        const product = this.findProduct(productId);
        if (product) {
            return true;
        }
        return false;
    }
    listAllProducts() {
        console.log("=== Készlet ===");
        for (const product of this.products) {
            console.log(" - " + product.getInfo());
        }
        console.log("===============");
    }
}
exports.Inventory = Inventory;
