import * as React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import CustomNavbar from "../navbar/CustomNavbar";
import {Home} from "../home/Home";

class App extends React.Component<{}, {}> {


    public render() {
        return (
            <BrowserRouter>
                <div>
                    <CustomNavbar/>
                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/map" component={Home}/>
                </div>
            </BrowserRouter>
        );    }
}

export default App;
