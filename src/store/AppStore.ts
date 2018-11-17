import {createStore} from 'redux';
import allReducers from "./reducers/AllReducers";
import {MapMarker} from "../model/MapMarker";
import {Messenger} from "../model/Messenger";

export interface IAppState {
    markers: MapMarker[],
    messengers: Messenger[]
}

const INITIAL_STATE: IAppState = {
    markers: [],
    messengers: [],
}

const appStore = createStore(
    allReducers,
    INITIAL_STATE as any,
    ((window) as any).devToolsExtension &&
    ((window) as any).devToolsExtension());
export { appStore };