import * as React from 'react';
import {ICarsProps} from "./types/ICarsProps";
// import {graphql} from "react-apollo/graphql";
import {addCars} from "../../store/actions/car-actions";
import {connect} from "react-redux";
import {IAppState} from "../../store/AppStore";
import CarsList from "../cars-list/CarsList";
import carQuery from "./car-query";
// import carSubscription from "./car-subscriptions";
import {Query} from "react-apollo";
import {Car} from "../../model/Car";

// const CarsQL = graphql<{}, {}>(carQuery);

class CarsComponent extends React.Component<ICarsProps, {}> {

    private unsubscribe: any;
    constructor(props: ICarsProps, context: any) {
        super(props, context);
    }

    // public componentWillReceiveProps(nextProps: Readonly<ICarsProps>, nextContext: any): void {
    //     this.onDataArrival(nextProps.data);
    //     this.initSubscriptions(nextProps.data);
    // }

    public onDataArrival = (car: Car[]) => {
        // if(data && !data.loading && data.car) {
        //     this.props.onDataArrival(data.car);
        // }
        this.props.onDataArrival(car);
    }

    public render() {
        // if (!this.props.cars) {
        //     return;
        // }
        //
        // return (
        //     <CarsList cars={this.props.cars}/>
        // )
        return (<Query query={carQuery}>
                {({ data: { car }, loading }) => {
                    if(!loading) {
                        this.onDataArrival(car)
                    }
                    return (
                        <CarsList cars={this.props.cars}/>
                    );
                }}
            </Query>
        )
    };

    public componentWillUnmount(): void {
        console.log('unsubscribing...');
        this.unsubscribe();
    }

    // private initSubscriptions = (data: any) => {
    //     if(data && !data.loading) {
    //         // Check for existing subscription
    //         if (this.unsubscribe) {
    //             // Check if props have changed and, if necessary, stop the subscription
    //             return;
    //         }
    //
    //         // Subscribe
    //         console.log('init subscriptions...');
    //         this.unsubscribe = data.subscribeToMore({
    //             document: carSubscription,
    //         });
    //     }
    //
    // }
}

const mapActionsToProps = {
    onDataArrival: addCars
};

const mapStateToProps = (state: IAppState) => ({
    cars: state.cars,
})

export default connect(mapStateToProps, mapActionsToProps)(CarsComponent);
