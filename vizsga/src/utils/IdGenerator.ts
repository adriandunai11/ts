export class IdGenerator {
    private currentId: number = 1;

    getNextId(): number {
        return this.currentId++;
    }
}