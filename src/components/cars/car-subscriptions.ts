import gql from "graphql-tag";

const carSubscription = gql`
    subscription {
        carChanged{
            _id
            name
        }
    }
`

export default carSubscription;