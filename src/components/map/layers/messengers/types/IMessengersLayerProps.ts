import {Messenger} from "../../../../../model/Messenger";

export interface IMessengersLayerProps {
    messengers: Messenger[];
    data: any,
    onNewMessengers: (messengers: Messenger[]) => void;
}