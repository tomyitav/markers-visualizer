import {Train} from "../../model/Train";

export const ADD_TRAINS = 'trains:addTrains';

export function addTrains(fetchedTrains: Train[]) {
    return {
        type: ADD_TRAINS,
        payload: {
            trains: fetchedTrains
        }
    }
}