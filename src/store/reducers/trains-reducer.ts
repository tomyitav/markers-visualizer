import {Train} from "../../model/Train";
import {ADD_TRAINS} from "../actions/train-actions";

const trainsReducer = (state: Train[] = [], action: any) => {
    switch (action.type) {
        case ADD_TRAINS:
            return action.payload.trains;
        default:
            return state;
    }
}

export default trainsReducer;