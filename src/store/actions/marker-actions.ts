import {Marker} from "../../model/Marker";

export const ADD_MARKERS = 'markers:addMarkers';

export function addMarkers(fetchedMarkers: Marker[]) {
    return {
        type: ADD_MARKERS,
        payload: {
            markers: fetchedMarkers
        }
    }
}