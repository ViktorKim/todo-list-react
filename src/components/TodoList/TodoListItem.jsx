/**
 * Created by Viktor.Kim on 10/3/2018
 */

import React from 'react';
import {connect} from 'react-redux';

const TodoListItem = ({name, isDone, id, actions}) => {

    function removeTodo() {
        actions.removeTodo(id);
    }

    function editTodo(e) {
        actions.editTodo({id: id, value: e.target.value});
    }

    function toggleTodoStatus() {
        actions.toggleTodoStatus(id);
    }

    return (
        <li className={'todo-list__item form-group' + (isDone ? ' done' : '')} data-id={id}>
            <label className='todo-status'>
                <input type="checkbox" onChange={toggleTodoStatus}/>
            </label>
            <input className='todo form-control' type="text" value={name} onChange={editTodo}/>
            <button className='remove btn btn-danger' onClick={removeTodo}>Remove</button>
        </li>
    );
};

export default connect(
    state => ({}),
    dispatch => {
        return {
            actions: {
                removeTodo: (id) => {
                    dispatch({type: 'REMOVE', payload: id});
                },
                editTodo: (data) => {
                    dispatch({type: 'EDIT', payload: data});
                },
                toggleTodoStatus: (id) => {
                    dispatch({type: 'TOGGLE_STATUS', payload: id});
                },
            }
        }
    }
)(TodoListItem);
