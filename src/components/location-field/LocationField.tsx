import * as React from 'react';
// import {FieldProps} from 'formik';
import './LocationField.css'
import Geosuggest, {Suggest} from 'react-geosuggest';
import {LocationFieldProps} from "./types/LocationFieldProps";
import {addSingleMarker} from "../../store/actions/marker-actions";
import {connect} from "react-redux";

class LocationField extends React.Component<LocationFieldProps, {}> {
    constructor(props: LocationFieldProps, context: any) {
        super(props, context);
    }

    public onSuggestSelect = (place: Suggest) => {
        const {location: {lat, lng}} = place;
        this.props.onSelectLocation({lat, lng});
    }

    public render() {
        // const {
        //     field: {onChange, onBlur: _, ...field},
        //     form: {touched, errors, setFieldValue},
        //     ...props
        // } = this.props;

        return (
            <Geosuggest
                placeholder="Start typing!"
                initialValue="Hamburg"
                onSuggestSelect={this.onSuggestSelect}
                location={new google.maps.LatLng(53.558572, 9.9278215)}
                radius={20} />
        )
    }
}

const mapActionsToProps = {
    onSelectLocation: addSingleMarker
};

export default connect(undefined, mapActionsToProps)(LocationField)