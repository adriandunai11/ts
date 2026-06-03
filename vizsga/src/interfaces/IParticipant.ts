import { Identifiable } from "./Identifiable";

export interface IParticipant extends Identifiable {
    name: string;
    email: string;
}