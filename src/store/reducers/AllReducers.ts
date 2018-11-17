import {combineReducers} from "redux";
import markersReducer from "./markers-reducer";
import messengersReducer from "./messengers-reducer";

const allReducers = combineReducers({
    markers: markersReducer,
    messengers: messengersReducer,
});

export default allReducers;