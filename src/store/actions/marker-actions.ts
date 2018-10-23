import {MapMarker} from "../../model/MapMarker";

export const ADD_MARKERS = 'markers:addMarkers';
export const ADD_SINGLE_MARKER = 'markers:addSingleMarker';

export function addMarkers(fetchedMarkers: MapMarker[]) {
    return {
        type: ADD_MARKERS,
        payload: {
            markers: fetchedMarkers
        }
    }
}

export function addSingleMarker(markerToAdd: MapMarker) {
    return {
        type: ADD_SINGLE_MARKER,
        payload: {
            marker: markerToAdd
        }
    }
}