import {Messenger} from "../../model/Messenger";

export const ADD_MESSENGERS = 'messengers:addMessengers';

export function addMessengers(fetchedMessengers: Messenger[]) {
    return {
        type: ADD_MESSENGERS,
        payload: {
            messengers: fetchedMessengers
        }
    }
}
