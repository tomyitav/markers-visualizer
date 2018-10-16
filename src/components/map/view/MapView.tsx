import * as React from 'react';

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {MapViewProps} from "./types/MapViewProps";
import {MapMarker} from "../../../model/MapMarker";

export const MapView = withGoogleMap((props: MapViewProps) => {
    const {markers} = props;
        return (
            <GoogleMap
            defaultZoom={8}
            defaultCenter={{lat: -34.397, lng: 150.644}}
        >
                {
                    markers && markers.map((marker: MapMarker, i: number) => {
                        return (
                            <div key={i}>
                                <Marker
                                    position={{lat: marker.lat, lng: marker.lng}}
                                />
                            </div>
                        )
                    })
                }
        </GoogleMap>
        )
    }
);

