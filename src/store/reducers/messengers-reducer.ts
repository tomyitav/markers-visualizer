import {Messenger} from "../../model/Messenger";
import {ADD_MESSENGERS} from "../actions/messengers-actions";

const messengersReducer = (state: Messenger[] = [], action: any) => {
    switch (action.type) {
        case ADD_MESSENGERS:
            return action.payload.messengers;
        default:
            return state;
    }
}

export default messengersReducer;