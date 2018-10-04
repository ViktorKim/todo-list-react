/**
 * Created by Viktor.Kim on 10/3/2018
 */

import React from 'react';

const TodoListItem = ({name, isDone, id, removeAction, editAction, toggleStatusAction}) => {

    function removeTodo() {
        removeAction(id);
    }

    function editTodo(e) {
        editAction({id: id, value: e.target.value});
    }

    function toggleTodoStatus() {
        toggleStatusAction(id);
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

export default TodoListItem;
