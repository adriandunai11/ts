import { Product } from "./Product";
import { OrderStatus } from "./enums/OrderStatus";

export class Order {
    public orderId: string;
    private products: Product[];
    private status: OrderStatus;

    constructor(orderId: string, products: Product[]) {
        this.orderId = orderId;
        this.products = products;
        this.status = OrderStatus.New;
    }

    updateStatus(newStatus: OrderStatus): void {
        this.status = newStatus;
        console.log(`Rendelés #${this.orderId} új állapota: ${this.status}`);
    }

    getTotalPrice(): number {
        let total = 0;
        for (const product of this.products) {
            total = total + product.price;
        }
        return total;
    }

    printSummary(): void {
        console.log(`--- Rendelés #${this.orderId} ---`);
        console.log(`Állapot: ${this.status}`);
        console.log(`Termékek:`);
        for (const product of this.products) {
            console.log(`  - ${product.name}: ${product.price} Ft`);
        }
        console.log(`Összesen: ${this.getTotalPrice()} Ft`);
    }
}
