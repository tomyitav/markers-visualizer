import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {WebSocketLink} from "apollo-link-ws";
import {getMainDefinition} from "apollo-utilities";
import { split } from 'apollo-link';

const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'network-only',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all',
    },
}

const httpLink = new HttpLink({
    uri: 'http://localhost:8080/graphql'
});

const wsLink = new WebSocketLink({
    uri: 'ws://localhost:8090/subscriptions',
    options: {
        reconnect: true
    }
});

const link = split(
    // split based on operation type
    ({ query }) => {
        const { kind, operation } = (getMainDefinition(query as any) as any);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLink,
);

const client = new ApolloClient({
    // By default, this client will send queries to the
    //  `/graphql` endpoint on the same host
    // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
    // to a different host
    link,
    cache: new InMemoryCache(),
    defaultOptions: (defaultOptions) as any
});
export default client;