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

export default INIT_STATE;
