import * as React from 'react';
// import {FieldProps} from 'formik';
import './LocationField.css'
import Geosuggest, {Suggest} from 'react-geosuggest';

class LocationField extends React.Component<{}, {}> {
    constructor(props: any, context: any) {
        super(props, context);
    }

    public onSuggestSelect = (place: Suggest) => {
        console.log('Got location- ', place);
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

export default LocationField