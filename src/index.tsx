import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {appStore} from "./store/AppStore";
import client from "./services/apollo-service/Client";
import {ApolloProvider} from "react-apollo";

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={appStore}><App /></Provider></ApolloProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
