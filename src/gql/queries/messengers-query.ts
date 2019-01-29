import gql from "graphql-tag";

const messengersQuery = gql`
    {
        Messengers {
            location{
                lat
                lng
            }
            kind
            ts
        }
    }`

export default messengersQuery;