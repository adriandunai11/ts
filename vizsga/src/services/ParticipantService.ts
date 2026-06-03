import { Participant } from "../models/Participant";
import { InMemoryRepository } from "../repositories/InMemoryRepository";
import { IdGenerator } from "../utils/IdGenerator";

export class ParticipantService {
    constructor(
        private participantRepository: InMemoryRepository<Participant>,
        private idGenerator: IdGenerator
    ) {}

    createParticipant(name: string, email: string): Participant {
        const participant = new Participant(this.idGenerator.getNextId(), name, email);

        this.participantRepository.add(participant);

        return participant;
    }

    getParticipantById(id: number): Participant | undefined {
        return this.participantRepository.getById(id);
    }

    getAllParticipants(): Participant[] {
        return this.participantRepository.getAll();
    }

    deleteParticipant(id: number): void {
        this.participantRepository.delete(id);
    }
}