import * as React from 'react';
import {ITrainsListProps} from "./types/ITrainsListProps";
import {Grid, Table} from "react-bootstrap";
import {Train} from "../../model/Train";

class TrainsList extends React.Component<ITrainsListProps, {}> {

    constructor(props: ITrainsListProps, context: any) {
        super(props, context);
    }

    public render() {
        return (
            <Grid>
                <h1>trains</h1>
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
        return this.props.trains.map((train: Train, index: number) => {
            return (
                <tr key={index}>
                    <td>{ train._id }</td>
                    <td>{train.name}</td>
                </tr>
            );
        });
    }
}

export default TrainsList;
