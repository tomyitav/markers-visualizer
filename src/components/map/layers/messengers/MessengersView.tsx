import * as React from 'react';
import {IMessengersViewProps} from "./types/IMessengersViewProps";
import MarkerWrapper from "../../marker-wrapper/MarkerWrapper";
import {Messenger} from "../../../../model/Messenger";

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
