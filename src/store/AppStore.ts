import {createStore} from 'redux';
import allReducers from "./reducers/AllReducers";
import {Car} from "../model/Car";
import {Train} from "../model/Train";

export interface IAppState {
    trains: Train[],
    cars: Car[]
}

const INITIAL_STATE: IAppState = {
    trains: [],
    cars: [],
}

const appStore = createStore(
    allReducers,
    INITIAL_STATE as any,
    ((window) as any).devToolsExtension &&
    ((window) as any).devToolsExtension());
export { appStore };