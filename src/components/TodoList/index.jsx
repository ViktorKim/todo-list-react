/**
 * Created by Viktor.Kim on 10/3/2018
 */

import React from 'react';

import {connect} from 'react-redux';

import TodoListItem from './TodoListItem';

import './main.css';

const TodoList = ({storage, actions}) => {

    function validateData(data) {
        if (data.trim() === '') {
            return false;
        }
        for (let todo_id in storage.todo_list) {
            if (storage.todo_list.hasOwnProperty(todo_id) && storage.todo_list[todo_id].name.toLowerCase() === data.toLowerCase()) {
                return false
            }
        }
        return true;
    }

    function addTodo(e) {
        e.preventDefault();
        const TODO_INPUT = e.target.todoName;
        if (validateData(TODO_INPUT.value)) {
            TODO_INPUT.classList.remove('is-invalid');
            const NEW_DATA = {
                name: TODO_INPUT.value,
                isDone: false,
            };
            actions.addTodo(NEW_DATA);
            TODO_INPUT.value = '';
        } else {
            TODO_INPUT.classList.add('is-invalid');
        }
    }

    return (
        <div className="todo-list__wrapper">
            <form action="#" className='add-todo' onSubmit={addTodo}>
                <div className="form-group">
                    <div className="input-group">
                        <input type="text" placeholder='Add new Todo' name='todoName' className='form-control'/>
                        <div className='input-group-append '>
                            <button className='btn btn-success'>Add</button>
                        </div>
                        <div className='invalid-feedback'>Can't add empty todo or maybe this todo is already exist</div>
                    </div>
                </div>
            </form>
            <ul className='todo-list'>
                {
                    Object.keys(storage.todo_list).map((id) => {
                        return (
                            <TodoListItem key={id}
                                          id={id}
                                          name={storage.todo_list[id].name}
                                          isDone={storage.todo_list[id].isDone}
                            />
                        );
                    })
                }
            </ul>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            addTodo: (data) => {
                dispatch({type: 'ADD', payload: data});
            },
        }
    }
}

export default connect(
    () => ({}),
    mapDispatchToProps
)(TodoList);
