import { Inventory } from "./Inventory";
import { Order } from "./Order";
import { Product } from "./Product";

export class User {
    public userId: string;
    public name: string;
    public email: string;
    private orders: Order[] = [];

    constructor(userId: string, name: string, email: string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
    }

    placeOrder(products: Product[], inventory: Inventory): void {
        for (const product of products) {
            if (!inventory.isAvailable(product.id)) {
                console.log(`Hiba: a(z) "${product.name}" termék nem elérhető!`);
                return;
            }
        }

        const orderId = "ORDER-" + (this.orders.length + 1);

        const newOrder = new Order(orderId, products);
        this.orders.push(newOrder);

        console.log(`${this.name} sikeresen leadta a rendelést!`);
        newOrder.printSummary();
    }

    printOrderHistory(): void {
        console.log(`${this.name} rendelései:`);
        if (this.orders.length === 0) {
            console.log("  Még nincs rendelés.");
        } else {
            for (const order of this.orders) {
                console.log(`  - Rendelés #${order.orderId}`);
            }
        }
    }
}
