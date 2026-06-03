import { IEvent } from "../interfaces/IEvent";
import { EventType } from "../enums/EventType";
import { Participant } from "./Participant";

export class Event implements IEvent {
    private participants: Participant[] = [];

    constructor(
        public id: number,
        public name: string,
        public location: string,
        public date: Date,
        public type: EventType
    ) { }

    addParticipant(participant: Participant): void {
        const exists = this.participants.some((currentParticipant) => currentParticipant.id === participant.id)

        if (exists) {
            throw new Error("Ez a résztvevő már regisztrálva van erre a rendezvényre.");
        }

        this.participants.push(participant);
    }

    removeParticipant(participantId: number): void {
        const exists = this.participants.some((participant) => participant.id === participantId)

        if (!exists) {
            throw new Error("Nem található ilyen résztvevő ezen a rendezvényen.");
        }

        this.participants = this.participants.filter((participant) => participant.id !== participantId);
    }

    updateDetails(name: string, location: string, date: Date, type: EventType): void {
        this.name = name;
        this.location = location;
        this.date = date;
        this.type = type;
    }

    getParticipants(): Participant[] {
        return [...this.participants];
    }

    getDetails(): string {
        const participantsText = this.participants.length === 0 ? "Nincs megadva résztvevő" : this.participants.map((participant) => participant.getDetails()).join(", ");

        return `
            Rendevény azonosítója: ${this.id}
            Rendevény neve: ${this.name}
            Helyszín: ${this.location}
            Időpont: ${this.date.toLocaleString()}
            Típus: ${this.type}
            Részvevők száma: ${this.participants.length}
            Résztvevők: ${participantsText}
        `;
    }
}