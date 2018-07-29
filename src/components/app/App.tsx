import * as React from 'react';
import './App.css';
import TaskList from "../task-list/TaskList";
import {IState} from "./types/IState";
import {IProps} from "./types/IProps";
import {connect} from "react-redux";
import {IAppState} from "../../store/AppStore";
import {default as TaskForm} from "../task-form/TaskForm";
import CarsComponent from "../cars/CarsComponent";

class App extends React.Component<IProps, IState> {

    constructor(props: IProps, context: any) {
        super(props, context);
    }


    public render() {
        return (
            <div className="App">
                <TaskForm/>
                <TaskList tasks={this.props.tasks}/>
                <CarsComponent />
            </div>
        );
    }
}

const mapStateToProps = (state: IAppState) => ({
    tasks: state.tasks,
})

export default connect(mapStateToProps)(App);
