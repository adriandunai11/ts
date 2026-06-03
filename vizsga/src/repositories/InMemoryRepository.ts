import { IRepository } from "../interfaces/IRepository";
import { Identifiable } from "../interfaces/Identifiable";

export class InMemoryRepository<T extends Identifiable> implements IRepository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    update(id: number, updateItem: T): void {
        const index = this.items.findIndex((item) => item.id === id);

        if (index === -1) {
            throw new Error("Nem található ilyen azonosítójú elem.");
        }

        this.items[index] = updateItem;
    }

    delete(id: number): void {
        const originalLength = this.items.length;

        this.items = this.items.filter((item) => item.id !== id);

        if (this.items.length === originalLength) {
            throw new Error("Nem található ilyen azonosítójú elem.");
        }
    }

    getById(id: number): T | undefined {
        return this.items.find((item) => item.id === id);
    }

    getAll(): T[] {
        return [...this.items];
    }
}