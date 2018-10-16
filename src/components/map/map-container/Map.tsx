import * as React from 'react';

import {MapView} from "../view/MapView";
import {MapMarker} from "../../../model/MapMarker";
import {MapProps} from "./types/MapProps";
import {IAppState} from "../../../store/AppStore";
import {addMarkers} from "../../../store/actions/marker-actions";
import {connect} from "react-redux";

class Map extends React.Component<MapProps, {}> {
    constructor(props: any, context: any) {
        super(props, context);
    }

    public fetchMarkers = (): Promise<any> => {
        return new Promise((res) => {
            setTimeout(() => {
                res([
                    { lat: -34.397, lng: 150.644 }
                ])
            }, 1000)
        })
    }

    public handleFetchedMarkers = (markers: MapMarker[]) => {
        if(markers) {
            this.props.setMarkers(markers);
        }
    }

    public async componentDidMount(): Promise<any> {
        const markers = await this.fetchMarkers();
        this.handleFetchedMarkers(markers);
    }

    public render() {
        return (
            <MapView
                containerElement={<div style={{height: `400px`}}/>}
                mapElement={<div style={{height: `100%`}}/>}
                markers={this.props.markers}
            />
        )
    }
}

const mapActionsToProps = {
    setMarkers: addMarkers
};

const mapStateToProps = (state: IAppState) => ({
    markers: state.markers,
})

export default connect(mapStateToProps, mapActionsToProps)(Map)