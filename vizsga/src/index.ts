import { EventType } from "./enums/EventType";
import { Event } from "./models/Event";
import { Participant } from "./models/Participant";
import { InMemoryRepository } from "./repositories/InMemoryRepository";
import { EventService } from "./services/EventService";
import { ParticipantService } from "./services/ParticipantService";
import { IdGenerator } from "./utils/IdGenerator";

const eventRepository = new InMemoryRepository<Event>();
const participantRepository = new InMemoryRepository<Participant>();

const eventIdGenerator = new IdGenerator();
const participantIdGenerator = new IdGenerator();

const eventService = new EventService(eventRepository, eventIdGenerator);

const participantService = new ParticipantService(participantRepository, participantIdGenerator);

try {
    const business = eventService.createEvent("Csapatépítő", "Budapest", new Date("2026-06-06T13:00:00"), EventType.Business);

    const concert = eventService.createEvent("Nyári koncert", "Budapest Park", new Date("2026-08-10T20:00:00"), EventType.Concert);

    const festival = eventService.createEvent("Balatoni Fesztivál", "Siófok", new Date("2026-08-20T16:00:00"), EventType.Festival);

    const tamas = participantService.createParticipant("Kiss Tamás", "tamas@gmail.com");

    const peter = participantService.createParticipant("Nagy Péter", "peter@gmail.com");

    const reka = participantService.createParticipant("Tóth Réka", "reka@gmail.com");

    eventService.addParticipantToEvent(business.id, tamas);
    eventService.addParticipantToEvent(business.id, peter);
    eventService.addParticipantToEvent(concert.id, reka);

    console.log("\n---- Összes rendezvény ----");
    eventService.getAllEvents().forEach((event) => {
        console.log(event.getDetails());
    });

    console.log("\n---- Összes résztvevő ----");
    participantService.getAllParticipants().forEach((participant) => {
        console.log(participant.getDetails());
    });

    console.log("\n---- Koncert típusú rendezvények ----");
    eventService.getEventsByType(EventType.Concert).forEach((event) => {
        console.log(event.getDetails());
    });

    console.log("\n---- Rendezvény keresése név alapján ----");
    eventService.searchEventsByName("fesztivál").forEach((event) => {
        console.log(event.getDetails());
    });

    console.log("\n---- Rendezvény módosítása ----");
    eventService.updateEvent(business.id, "Bence nagy szülinapi bulija", "Budapest, belváros", new Date("2026-07-15T19:00:00"), EventType.Birthday);

    console.log(business.getDetails());

    console.log("\n---- Résztvevő eltávolítása rendezvényről ----");
    eventService.removeParticipantFromEvent(business.id, peter.id);

    console.log(business.getDetails());

    console.log("\n---- Rendezvény törlése ----");
    eventService.deleteEvent(festival.id);

    console.log("\n---- Rendezvények törlés után ----");
    eventService.getAllEvents().forEach((event) => {
        console.log(event.getDetails());
    });
} catch (error) {
    if (error instanceof Error) {
        console.log("Hiba:", error.message);
    }
}