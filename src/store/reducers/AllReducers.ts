import {combineReducers} from "redux";
import carsReducer from "./cars-reducer";
import trainsReducer from "./trains-reducer";
import markersReducer from "./markers-reducer";
import messengersReducer from "./messengers-reducer";

const allReducers = combineReducers({
    trains: trainsReducer,
    cars: carsReducer,
    markers: markersReducer,
    messengers: messengersReducer,
});

export default allReducers;