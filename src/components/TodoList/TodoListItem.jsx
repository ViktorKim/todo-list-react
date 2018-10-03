/**
 * Created by Viktor.Kim on 10/3/2018
 */

import React from 'react';

const TodoListItem = ({name, isDone, id, removeAction, editAction}) => {

    function removeTodo(e) {
        const TODO_ITEM = e.target.parentElement;
        removeAction(TODO_ITEM.getAttribute('data-id'));
    }

    function editTodo(e) {
        let todo = {};
        todo.id = e.target.parentElement.getAttribute('data-id');
        todo.value = e.target.value;
        editAction(todo);
    }

    return (
        <li className={'todo-list__item form-group' + (isDone ? ' done' : '')} data-id={id}>
            <input type="checkbox"/>
            <input className='todo form-control' type="text" value={name} onChange={editTodo}/>
            <button className='remove btn btn-danger' onClick={removeTodo}>Remove</button>
        </li>
    );
};

export default TodoListItem;
