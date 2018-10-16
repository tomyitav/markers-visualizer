import {Marker} from "../../model/Marker";
import {ADD_MARKERS} from "../actions/marker-actions";

const markersReducer = (state: Marker[] = [], action: any) => {
    switch (action.type) {
        case ADD_MARKERS:
            return action.payload.markers;
        default:
            return state;
    }
}

export default markersReducer;