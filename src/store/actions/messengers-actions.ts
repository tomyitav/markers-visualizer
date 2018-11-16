import {MapMarker} from "../../model/MapMarker";

export const ADD_MESSENGERS = 'messengers:addMessengers';

export function addMessengers(fetchedMessengers: MapMarker[]) {
    return {
        type: ADD_MESSENGERS,
        payload: {
            markers: fetchedMessengers
        }
    }
}
