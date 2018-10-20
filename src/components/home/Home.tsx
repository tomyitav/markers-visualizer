import * as React from 'react';
import MapComponent from "../map/map-container/Map";
import LocationField from "../location-field/LocationField";

export const Home = () =>
    <div>
        <h1>Search copmonent</h1>
        <LocationField/>
        <MapComponent/>
    </div>