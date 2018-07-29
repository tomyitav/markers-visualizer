import gql from "graphql-tag";

const carQuery = gql`
    {
        car {
            _id
            name
        }
    }
`

export default carQuery;