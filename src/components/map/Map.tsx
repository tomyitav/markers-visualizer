import * as React from 'react';

import {MapView} from "./view/MapView";

class Map extends React.Component<{}, {}> {
    constructor(props: any, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <MapView
                containerElement={<div style={{height: `400px`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
            />
        )
    }
}

export default Map