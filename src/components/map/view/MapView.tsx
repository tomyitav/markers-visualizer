import * as React from 'react';
import {GoogleMap, withGoogleMap} from "react-google-maps"
import {MapViewProps} from "./types/MapViewProps";
import MessengersLayer from "../layers/messengers/MessengersLayer";

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

