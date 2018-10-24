import * as React from 'react';
import {Marker, MarkerProps} from "react-google-maps";

class MarkerWrapper extends React.Component<MarkerProps, {}> {
    constructor(props: MarkerProps, context: any) {
        super(props, context);
    }

    public render() {
        const {position, label} = this.props;
        return (
            <Marker
                position={position}
                label={label}
                onRightClick={this.onRightClick}
            />
        )
    }

    private onRightClick = (e: any) => {
        console.log('Got right click element- ', e);
    }
}

export default MarkerWrapper