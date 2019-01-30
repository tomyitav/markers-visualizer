import * as React from 'react';
// import {FieldProps} from 'formik';
import './LocationField.css'
import Geosuggest, {Suggest} from 'react-geosuggest';
import {addSingleMarker} from "../../store/actions/marker-actions";
import {connect} from "react-redux";
import {graphql} from "react-apollo";
import addLocation from "../../gql/mutations/add-location";
import {Location} from "../../model/Location";

export interface LocationFieldProps {
    onSelectLocation?: any;
    addLocation: (location: Location | undefined) => void;
}

const AddLocationQL = graphql<{}, {}>(addLocation, {
    name: 'addLocation',
    options: {
        variables: {
            input: {
                try: 1
            }
        }
    }
})

class LocationField extends React.Component<LocationFieldProps, {}> {
    constructor(props: LocationFieldProps, context: any) {
        super(props, context);
        this.onSelect = this.onSelect.bind(this)
    }

    public onSelect(place: Suggest) {
        const {location: {lat, lng}} = place;
        // this.props.onSelectLocation({lat, lng});
        this.props.addLocation({lat: parseFloat(lat), lng: parseFloat(lng)})
    }


    public render() {
        return (
            <Geosuggest
                placeholder="Start typing!"
                initialValue="Hamburg"
                onSuggestSelect={this.onSelect}
                location={new google.maps.LatLng(53.558572, 9.9278215)}
                radius={20} />
        )
    }
}

const mapActionsToProps = {
    onSelectLocation: addSingleMarker
};

export default connect(undefined, mapActionsToProps)((AddLocationQL(LocationField as any)))