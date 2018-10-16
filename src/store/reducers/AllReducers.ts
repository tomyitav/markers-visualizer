import {combineReducers} from "redux";
import carsReducer from "./cars-reducer";
import trainsReducer from "./trains-reducer";
import markersReducer from "./markers-reducer";

const allReducers = combineReducers({
    trains: trainsReducer,
    cars: carsReducer,
    markers: markersReducer,
});

export default allReducers;