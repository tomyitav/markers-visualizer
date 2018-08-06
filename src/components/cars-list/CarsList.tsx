import * as React from 'react';
import {ICarsListProps} from "./types/ICarsListProps";
import {Button, Grid, Table} from "react-bootstrap";
import {Car} from "../../model/Car";

class CarsList extends React.Component<ICarsListProps, {}> {

    constructor(props: ICarsListProps, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <Grid>
                <h1>Cars</h1>
                <Table striped={true} bordered={true} hover={true}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Action</th>
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
                    <td>
                        <Button bsStyle="primary">Edit</Button>
                        <Button bsStyle="danger">X</Button>
                    </td>
                </tr>
            );
        });
    }
}

export default CarsList;
