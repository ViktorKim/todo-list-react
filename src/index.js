import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from "redux";
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";

import App from './App';
import * as serviceWorker from './serviceWorker';

let INIT_STATE = {};
if (localStorage.getItem('STORAGE') === null) {
    INIT_STATE = {
        info: {
            nextID: 3,
        },
        todo_list: {
            0: {
                name: 'Done',
                isDone: true,
            },
            1: {
                name: 'In progress',
                isDone: false,
            },
            2: {
                name: 'Done 2',
                isDone: true,
            },
        }
    };
    localStorage.setItem('STORAGE', JSON.stringify(INIT_STATE));
} else {
    INIT_STATE = JSON.parse(localStorage.getItem('STORAGE'));
}

function storeReducer( state = INIT_STATE, action ) {
        let _todoList = state.todo_list;
        let _nextItemID = state.info.nextID;
        console.log(_todoList);
        switch (action.type) {
            case 'ADD':
                _todoList[_nextItemID] = (action.payload);
                state = {
                    ...state,
                    todo_list: _todoList, info: {nextID: ++_nextItemID}
                };
                break;
            case 'REMOVE':
                delete _todoList[action.payload];
                state = {
                    ...state,
                    todo_list: _todoList
                };
                break;
            case 'EDIT':
                _todoList[action.payload.id].name = action.payload.value;
                state = {
                    ...state,
                    todo_list: _todoList
                };
                break;
            case 'TOGGLE_STATUS':
                _todoList[action.payload].isDone = !_todoList[action.payload].isDone;
                state = {
                    ...state,
                    todo_list: _todoList
                };
                break;
            default:
                console.log('Undefined action');
        }
        console.log(state);
        localStorage.setItem('STORAGE', JSON.stringify(state));

    return state;
}

const STORE = createStore(storeReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={STORE}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
