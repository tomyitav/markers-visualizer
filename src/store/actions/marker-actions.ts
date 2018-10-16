import {MapMarker} from "../../model/MapMarker";

export const ADD_MARKERS = 'markers:addMarkers';

export function addMarkers(fetchedMarkers: MapMarker[]) {
    return {
        type: ADD_MARKERS,
        payload: {
            markers: fetchedMarkers
        }
    }
}