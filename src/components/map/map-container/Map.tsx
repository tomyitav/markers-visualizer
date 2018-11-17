import * as React from 'react';
import {MapView} from "../view/MapView";
import {MapProps} from "./MapProps";
import {IAppState} from "../../../store/AppStore";
import {addMarkers} from "../../../store/actions/marker-actions";
import {connect} from "react-redux";

class MapComponent extends React.Component<MapProps, {}> {
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

const mapActionsToProps = {
    setMarkers: addMarkers
};

const mapStateToProps = (state: IAppState) => ({
    markers: state.markers,
})

export default connect(mapStateToProps, mapActionsToProps)(MapComponent)