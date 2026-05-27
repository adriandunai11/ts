import { IProduct } from "./interfaces/IProduct";

export class Product implements IProduct {
    public id: string;
    public name: string;
    public price: number;
    private description: string;

    constructor(id: string, name: string, price: number, description: string = "") {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }

    getInfo(): string {
        if (this.description !== "") {
            return `${this.name} (${this.price} Ft) - ${this.description}`;
        } else {
            return `${this.name} (${this.price} Ft)`;
        }
    }
}
