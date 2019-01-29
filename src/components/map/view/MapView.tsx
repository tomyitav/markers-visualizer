import * as React from 'react';
import {GoogleMap, withGoogleMap} from "react-google-maps"
import MessengersLayer from "../layers/messengers/MessengersLayer";
import {MapMarker} from "../../../model/MapMarker";

export interface MapViewProps {
    containerElement: any;
    mapElement: any;
    markers?: MapMarker[];
}

export const MapView = withGoogleMap((props: MapViewProps) => {
        return (
            <GoogleMap
            defaultZoom={8}
            defaultCenter={{lat: -34.397, lng: 150.644}}
        >
                <MessengersLayer/>
        </GoogleMap>
        )
    }
);

