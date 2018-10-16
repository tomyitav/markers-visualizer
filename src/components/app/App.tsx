import * as React from 'react';
import './App.css';
import CarsComponent from "../cars/CarsComponent";
import {BrowserRouter, Route} from "react-router-dom";
import CustomNavbar from "../navbar/CustomNavbar";
import TrainsComponent from "../trains/TrainsComponent";
import Map from "../map/map-container/Map";

class App extends React.Component<{}, {}> {

    public render() {
        return (
            <BrowserRouter>
                <div>
                    <CustomNavbar/>
                    <Route exact={true} path="/" component={CarsComponent}/>
                    <Route path="/car" component={CarsComponent}/>
                    <Route path="/train" component={TrainsComponent}/>
                    <Route path="/map" component={Map}/>
                </div>
            </BrowserRouter>
        );    }
}

export default App;
