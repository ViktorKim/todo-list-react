import INIT_STATE from './InitState';

export const TodoListReducer = ( state = INIT_STATE, action ) => {
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
};

