import { Identifiable } from "./Identifiable";
import { EventType } from "../enums/EventType";

export interface IEvent extends Identifiable {
    name: string;
    location: string;
    date: Date;
    type: EventType;
}