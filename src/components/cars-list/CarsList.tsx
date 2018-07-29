import * as React from 'react';
import {ICarsListProps} from "./types/ICarsListProps";
import {Grid, Table} from "react-bootstrap";
import {Car} from "../../model/Car";

class CarsList extends React.Component<ICarsListProps, {}> {

    constructor(props: ICarsListProps, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <Grid>
                <Table striped={true} bordered={true} hover={true}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderCars() }
                    </tbody>
                </Table>
            </Grid>
        )
    };

    public renderCars = () => {
        return this.props.cars.map((car: Car, index: number) => {
            return (
                <tr key={index}>
                    <td>{ car._id }</td>
                    <td>{car.name}</td>
                </tr>
            );
        });
    }
}

export default CarsList;
