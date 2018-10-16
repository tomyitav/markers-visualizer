import * as React from 'react';

import {MapView} from "./view/MapView";

const Map = (props: any) =>
    <MapView
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
    />

export default Map;