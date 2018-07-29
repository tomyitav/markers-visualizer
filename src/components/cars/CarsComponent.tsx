import * as React from 'react';
import {ICarsProps} from "./types/ICarsProps";
import {graphql} from "react-apollo/graphql";
import {addCars} from "../../store/actions/car-actions";
import {connect} from "react-redux";
import {IAppState} from "../../store/AppStore";
import CarsList from "../cars-list/CarsList";
import carQuery from "./car-query";

const CarsQL = graphql<{}, {}>(carQuery);

class CarsComponent extends React.Component<ICarsProps, {}> {

    constructor(props: ICarsProps, context: any) {
        super(props, context);
    }


    public componentDidMount(): void {
        console.log('Component will mount');
    }

    public onDataArrival = (data: any) => {
        if(data && data.car) {
            this.props.onDataArrival(data.car);
        }
    }

    public render() {
        if (!this.props.data) {
            return;
        }
        console.log('logging data- ', this.props.data)
        this.onDataArrival(this.props.data);
        return (
            <React.Fragment>
                <h1>It works!</h1>
                <CarsList cars={this.props.cars}/>
            </React.Fragment>
        )
    };
}

const mapActionsToProps = {
    onDataArrival: addCars
};

const mapStateToProps = (state: IAppState) => ({
    cars: state.cars,
})

export default CarsQL(connect(mapStateToProps, mapActionsToProps)(CarsComponent));
