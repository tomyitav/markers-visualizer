import {Car} from "../../model/Car";

export const ADD_CARS = 'cars:addCars';

export function addCars(fetchedCars: Car[]) {
    return {
        type: ADD_CARS,
        payload: {
            cars: fetchedCars
        }
    }
}