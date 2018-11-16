import {Location} from "./Location";

export interface Messenger {
    location: Location
    kind: string,
    ts: string,
}