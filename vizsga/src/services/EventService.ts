import { Event } from "../models/Event";
import { EventType } from "../enums/EventType";
import { Participant } from "../models/Participant";
import { InMemoryRepository } from "../repositories/InMemoryRepository";
import { IdGenerator } from "../utils/IdGenerator";

export class EventService {
    constructor(private eventRepository: InMemoryRepository<Event>, private idGenerator: IdGenerator) { }

    createEvent(name: string, location: string, date: Date, type: EventType) {
        const event = new Event(this.idGenerator.getNextId(), name, location, date, type);

        this.eventRepository.add(event);

        return event;
    }

    updateEvent(id: number, name: string, location: string, date: Date, type: EventType): void {
        const event = this.eventRepository.getById(id);

        if (!event) {
            throw new Error("Nem található ilyen rendezvény.");
        }

        event.updateDetails(name, location, date, type);
    }

    deleteEvent(id: number) {
        this.eventRepository.delete(id);
    }

    getEventById(id: number): Event | undefined {
        return this.eventRepository.getById(id);
    }

    getAllEvents(): Event[] {
        return this.eventRepository.getAll();
    }

    getEventsByType(type: EventType): Event[] {
        return this.eventRepository.getAll().filter((event) => event.type === type);
    }

    searchEventsByName(keyword: string): Event[] {
        return this.eventRepository.getAll().filter((event) => event.name.toLowerCase().includes(keyword.toLowerCase()));
    }

    addParticipantToEvent(eventId: number, participant: Participant): void {
        const event = this.eventRepository.getById(eventId);

        if (!event) {
            throw new Error("Nem található ilyen rendezvény.");
        }

        event.addParticipant(participant);
    }

    removeParticipantFromEvent(eventId: number, participantId: number): void {
        const event = this.eventRepository.getById(eventId);

        if (!event) {
            throw new Error("Nem található ilyen rendezvény.");
        }

        event.removeParticipant(participantId);
    }
}