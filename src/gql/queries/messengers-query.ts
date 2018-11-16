import gql from "graphql-tag";

const messengersQuery = gql`
    {
        MapMarkers {
            location {
                lat
                lng
            }
            kind
        }
    }`

export default messengersQuery;