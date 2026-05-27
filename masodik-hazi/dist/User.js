"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Order_1 = require("./Order");
class User {
    constructor(userId, name, email) {
        this.orders = [];
        this.userId = userId;
        this.name = name;
        this.email = email;
    }
    placeOrder(products, inventory) {
        for (const product of products) {
            if (!inventory.isAvailable(product.id)) {
                console.log(`Hiba: a(z) "${product.name}" termék nem elérhető!`);
                return;
            }
        }
        const orderId = "ORDER-" + (this.orders.length + 1);
        const newOrder = new Order_1.Order(orderId, products);
        this.orders.push(newOrder);
        console.log(`${this.name} sikeresen leadta a rendelést!`);
        newOrder.printSummary();
    }
    printOrderHistory() {
        console.log(`${this.name} rendelései:`);
        if (this.orders.length === 0) {
            console.log("  Még nincs rendelés.");
        }
        else {
            for (const order of this.orders) {
                console.log(`  - Rendelés #${order.orderId}`);
            }
        }
    }
}
exports.User = User;
