import {MapMarker} from "../../model/MapMarker";
import {ADD_MARKERS, ADD_SINGLE_MARKER} from "../actions/marker-actions";

const markersReducer = (state: MapMarker[] = [], action: any) => {
    switch (action.type) {
        case ADD_MARKERS:
            return action.payload.markers;
        case ADD_SINGLE_MARKER:
            return [
                ...state,
                action.payload.marker
            ];
        default:
            return state;
    }
}

export default markersReducer;