/**
 * Created by Viktor.Kim on 10/3/2018
 */

import React from 'react';
import TodoListItem from './TodoListItem';

import './main.css';

const TodoList = ({storage, action}) => {

    function addTodo(e) {
        e.preventDefault();
        const TODO_INPUT = e.target.todoName;
        if (TODO_INPUT.value.trim() !== '') {
            const NEW_DATA = {
                name: TODO_INPUT.value,
                isDone: false,
            };
            action('ADD', NEW_DATA);
            TODO_INPUT.value = '';
        }
    }

    function removeTodoByID(id) {
        action('REMOVE', id);
    }

    function editTodo(todo) {
        action('EDIT', todo);
        console.log(todo);
    }

    return (
        <div className="todo-list__wrapper">
            <form action="#" className='add-todo' onSubmit={addTodo}>
                <div className="form-group">
                    <div className="input-group">
                        <input type="text" placeholder='Add new Todo' name='todoName' className='form-control' />
                        <div className='input-group-append '>
                            <button className='btn btn-success'>Add</button>
                        </div>
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
                                          removeAction={removeTodoByID}
                                          editAction={editTodo}
                            />
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default TodoList;
