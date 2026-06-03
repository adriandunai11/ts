import { Identifiable } from "./Identifiable";

export interface IRepository<T extends Identifiable> {
    add(item: T): void;
    update(id: number, updatedItem: T): void;
    delete(id: number): void;
    getById(id: number): T | undefined;
    getAll(): T[];
}