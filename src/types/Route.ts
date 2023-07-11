import {Location} from "./Location";

export interface Route {
    id: string;
    startTime: Date;
    endTime?: Date;
    locations: Location[];
}
