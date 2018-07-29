import * as React from 'react';
import {ICarsProps} from "./types/ICarsProps";
import gql from 'graphql-tag';
import {graphql} from "react-apollo/graphql";
import {ChildProps} from "react-apollo/types";

const CarsQL = graphql<{}, {}>(gql`
    {
        car {
            _id
            name
        }
    }
`);

class CarsComponent extends React.Component<ChildProps<{}, {}>, {}> {

    constructor(props: ICarsProps, context: any) {
        super(props, context);
    }


    public componentDidMount(): void {
        console.log('Component will mount');
    }

    public render() {
        if (!this.props.data) {
            return;
        }
        console.log('logging data- ', this.props.data)
        return (
            <React.Fragment>
                <h1>It works!</h1>
            </React.Fragment>
        )
    };
}

export default CarsQL(CarsComponent);
