import {Car} from "../../model/Car";
import {ADD_CARS} from "../actions/car-actions";

const carsReducer = (state: Car[] = [], action: any) => {
    switch (action.type) {
        case ADD_CARS:
            return action.payload.cars;
        default:
            return state;
    }
}

export default carsReducer;