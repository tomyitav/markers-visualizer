import {MapMarker} from "../../../../model/MapMarker";

export interface MapViewProps {
    containerElement: any;
    mapElement: any;
    markers?: MapMarker[];
}