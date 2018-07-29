import {combineReducers} from "redux";
import tasksReducer from "./tasks-reducer";
import carsReducer from "./cars-reducer";

const allReducers = combineReducers({
    tasks: tasksReducer,
    cars: carsReducer
});

export default allReducers;