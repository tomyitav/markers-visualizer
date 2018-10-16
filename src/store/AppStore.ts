import {createStore} from 'redux';
import allReducers from "./reducers/AllReducers";
import {Car} from "../model/Car";
import {Train} from "../model/Train";
import {Marker} from "../model/Marker";

export interface IAppState {
    trains: Train[],
    cars: Car[],
    markers: Marker[],
}

const INITIAL_STATE: IAppState = {
    trains: [],
    cars: [],
    markers: [],
}

const appStore = createStore(
    allReducers,
    INITIAL_STATE as any,
    ((window) as any).devToolsExtension &&
    ((window) as any).devToolsExtension());
export { appStore };