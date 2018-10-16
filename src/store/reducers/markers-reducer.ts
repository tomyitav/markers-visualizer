import {MapMarker} from "../../model/MapMarker";
import {ADD_MARKERS} from "../actions/marker-actions";

const markersReducer = (state: MapMarker[] = [], action: any) => {
    switch (action.type) {
        case ADD_MARKERS:
            return action.payload.markers;
        default:
            return state;
    }
}

export default markersReducer;