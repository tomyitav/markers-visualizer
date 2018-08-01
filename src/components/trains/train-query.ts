import gql from "graphql-tag";

const trainQuery = gql`
    {
        train {
            _id
            name
        }
    }
`

export default trainQuery;