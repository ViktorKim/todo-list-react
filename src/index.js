import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import './index.css';

import {TodoListReducer} from './modules/TodoList'

import App from './App';
import Home from './Home';
import * as serviceWorker from './serviceWorker';
import PageFooter from './components/PageFooter';
import PageHeader from './components/PageHeader';

const STORE = createStore(TodoListReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={STORE}>
        <Router>
            <div className="page__wrapper">
                <div>
                    <PageHeader/>
                    <main>
                        <Route path='/' component={Home} exact />
                        <Route path='/todo-list' component={App} />
                    </main>
                </div>
                <PageFooter />
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
