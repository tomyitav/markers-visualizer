import {createStore} from 'redux';
import allReducers from "./reducers/AllReducers";
import {Task} from "../model/Task";
import {Car} from "../model/Car";

export interface IAppState {
    tasks: Task[],
    cars: Car[]
}

const INITIAL_STATE: IAppState = {
    tasks: [],
    cars: [],
}

const appStore = createStore(
    allReducers,
    INITIAL_STATE as any,
    ((window) as any).devToolsExtension &&
    ((window) as any).devToolsExtension());
export { appStore };