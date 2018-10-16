import * as React from 'react';

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {MapViewProps} from "./types/MapViewProps";

export const MapView = withGoogleMap((props: MapViewProps) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        <Marker
            position={{ lat: -34.397, lng: 150.644 }}
        />
    </GoogleMap>
);