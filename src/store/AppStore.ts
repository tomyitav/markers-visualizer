import {createStore} from 'redux';
import allReducers from "./reducers/AllReducers";
import {Car} from "../model/Car";
import {Train} from "../model/Train";
import {MapMarker} from "../model/MapMarker";
import {Messenger} from "../model/Messenger";

export interface IAppState {
    trains: Train[],
    cars: Car[],
    markers: MapMarker[],
    messengers: Messenger[]
}

const INITIAL_STATE: IAppState = {
    trains: [],
    cars: [],
    markers: [],
    messengers: [],
}

const appStore = createStore(
    allReducers,
    INITIAL_STATE as any,
    ((window) as any).devToolsExtension &&
    ((window) as any).devToolsExtension());
export { appStore };