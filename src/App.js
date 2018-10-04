import React from 'react';
import {connect} from 'react-redux';

import TodoList from './components/TodoList';
import './App.css';

const App = ({props}) => {
    return (
        <div className="App container">
            <TodoList storage={props}/>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        props: state
    }
}

export default connect(
    mapStateToProps
)(App);
