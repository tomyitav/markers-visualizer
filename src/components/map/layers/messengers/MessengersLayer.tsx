import * as React from 'react';
import {graphql} from "react-apollo";
import messengersQuery from "../../../../gql/queries/messengers-query";
import {MessengersView} from "./MessengersView";
import {IAppState} from "../../../../store/AppStore";
import {addMessengers} from "../../../../store/actions/messengers-actions";
import {connect} from "react-redux";
import {Messenger} from "../../../../model/Messenger";

const MessengersQL = graphql<{}, {}>(messengersQuery, {options: {pollInterval: 10000}});

export interface IMessengersLayerProps {
    messengers: Messenger[];
    data: any,
    onNewMessengers: (messengers: Messenger[]) => void;
}

class MessengersLayer extends React.Component<IMessengersLayerProps, {}> {
    constructor(props: any, context: any) {
        super(props, context);
    }

    public componentWillReceiveProps(nextProps: Readonly<IMessengersLayerProps>, nextContext: any): void {
        this.onDataArrival(nextProps.data);
    }

    public render() {
        return (
            <MessengersView messengers={this.props.messengers}/>
        )
    }

    private onDataArrival(data: any) {
        if(data && !data.loading && data.Messengers) {
            this.props.onNewMessengers(data.Messengers);
        }
    }
}

const mapActionsToProps = {
    onNewMessengers: addMessengers
};

const mapStateToProps = (state: IAppState) => ({
    messengers: state.messengers,
})

export default connect(mapStateToProps, mapActionsToProps)(MessengersQL((MessengersLayer)));