"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const OrderStatus_1 = require("./enums/OrderStatus");
class Order {
    constructor(orderId, products) {
        this.orderId = orderId;
        this.products = products;
        this.status = OrderStatus_1.OrderStatus.New;
    }
    updateStatus(newStatus) {
        this.status = newStatus;
        console.log(`Rendelés #${this.orderId} új állapota: ${this.status}`);
    }
    getTotalPrice() {
        let total = 0;
        for (const product of this.products) {
            total = total + product.price;
        }
        return total;
    }
    printSummary() {
        console.log(`--- Rendelés #${this.orderId} ---`);
        console.log(`Állapot: ${this.status}`);
        console.log(`Termékek:`);
        for (const product of this.products) {
            console.log(`  - ${product.name}: ${product.price} Ft`);
        }
        console.log(`Összesen: ${this.getTotalPrice()} Ft`);
    }
}
exports.Order = Order;
