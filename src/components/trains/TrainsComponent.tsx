import * as React from 'react';
import {ITrainProps} from "./types/ITrainProps";
import {graphql} from "react-apollo/graphql";
import {connect} from "react-redux";
import {IAppState} from "../../store/AppStore";
import trainQuery from "./train-query";
import {addTrains} from "../../store/actions/train-actions";
import TrainsList from "../trains-list/TrainsList";

const TrainQL = graphql<{}, {}>(trainQuery);

class TrainsComponent extends React.Component<ITrainProps, {}> {

    constructor(props: ITrainProps, context: any) {
        super(props, context);
    }

    public componentWillReceiveProps(nextProps: Readonly<ITrainProps>, nextContext: any): void {
        this.onDataArrival(nextProps.data);
    }

    public onDataArrival = (data: any) => {
        if(data && data.train) {
            this.props.onDataArrival(data.train);
        }
    }

    public render() {
        if (!this.props.trains) {
            return;
        }

        return (
            <TrainsList trains={this.props.trains}/>
        )
    };
}

const mapActionsToProps = {
    onDataArrival: addTrains
};

const mapStateToProps = (state: IAppState) => ({
    trains: state.trains,
})

export default TrainQL(connect(mapStateToProps, mapActionsToProps)(TrainsComponent));
