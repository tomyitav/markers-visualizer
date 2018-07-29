import * as React from 'react';
import {Query} from "react-apollo";
import gql from 'graphql-tag';

const carsQuery = gql`
    {
        car {
            _id
            name
        }
    }
`


const CarsComponent = () => {
    return(<Query query={carsQuery}>
        {
                ({ data, loading }) => {
                console.log('got data ', data)
                    return(
                        <div>
                            <label>carssss</label>
                        </div>
                    )
                }
        }
        </Query>
    )
}

export default CarsComponent;
