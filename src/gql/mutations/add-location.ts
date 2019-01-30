import gql from "graphql-tag";

const addLocation = gql`
    mutation {
        AddMessenger(input : {
            try: 1
        }) {
            kind
        }
    }`

export default addLocation;