import {combineReducers} from "redux";
import carsReducer from "./cars-reducer";
import trainsReducer from "./trains-reducer";

const allReducers = combineReducers({
    trains: trainsReducer,
    cars: carsReducer
});

export default allReducers;