import React, {Component} from 'react';
import TodoList from './components/TodoList';
import './App.css';

if (localStorage.getItem('STORAGE') === null) {
    const INIT_STATE = {
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
}

const STORAGE = JSON.parse(localStorage.getItem('STORAGE'));

class App extends Component {
    constructor(props) {
        super(props);
        this.state = STORAGE;
    }

    updateStorage = (action, data) => {
        let _todoList = this.state.todo_list;
        let _nextItemID = this.state.info.nextID;
        console.log(_todoList);
        switch (action) {
            case 'ADD':
                _todoList[_nextItemID] = (data);
                this.setState({todo_list: _todoList, info: {nextID: ++_nextItemID}});
                break;
            case 'REMOVE':
                delete _todoList[data];
                this.setState({todo_list: _todoList});
                break;
            case 'EDIT':
                _todoList[data.id].name = data.value;
                this.setState({todo_list: _todoList});
                break;
            case 'TOGGLE_STATUS':
                _todoList[data].isDone = !_todoList[data].isDone;
                this.setState({todo_list: _todoList});
                break;
            default:
                console.log('Undefined action');
        }
        console.log(this.state);
        localStorage.setItem('STORAGE', JSON.stringify(this.state));
    };

    render() {
        return (
            <div className="App container">
                <TodoList storage={STORAGE} action={this.updateStorage}/>
            </div>
        );
    }
}

export default App;
