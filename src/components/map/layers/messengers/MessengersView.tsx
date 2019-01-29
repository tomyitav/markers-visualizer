import * as React from 'react';
import MarkerWrapper from "../../marker-wrapper/MarkerWrapper";
import {Messenger} from "../../../../model/Messenger";

export interface IMessengersViewProps {
    messengers: Messenger[];
}

export const MessengersView = (props: IMessengersViewProps) => {
    const {messengers} = props;
    if(!messengers) {
        return null;
    }
    return (
        messengers && messengers.map((messenger: Messenger, i: number) => {
            return (
                <div key={i}>
                    <MarkerWrapper
                        position={{lat: messenger.location.lat, lng: messenger.location.lng}}
                        label={{"color": "black", "text" : "try-label"}}
                    />
                </div>
            )
        })
    ) as any;
}
