import { Product } from "./Product";

export class Inventory {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
        console.log(`Termék hozzáadva: ${product.name}`);
    }

    removeProduct(id: string): void {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
            }
        }

        if (index === -1) {
            console.log(`Nem található termék ezzel az ID-val: ${id}`);
        } else {
            const removedProduct = this.products[index];
            this.products.splice(index, 1);
            console.log(`Termék eltávolítva: ${removedProduct.name}`);
        }
    }

    findProduct(searchText: string): Product | undefined {
        for (const product of this.products) {
            if (product.id === searchText || product.name === searchText) {
                return product;
            }
        }
        return undefined;
    }

    isAvailable(productId: string): boolean {
        const product = this.findProduct(productId);
        if (product) {
            return true;
        }
        return false;
    }

    listAllProducts(): void {
        console.log("=== Készlet ===");
        for (const product of this.products) {
            console.log(" - " + product.getInfo());
        }
        console.log("===============");
    }
}
