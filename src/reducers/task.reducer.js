import { DELETE_TASK, GET_ALL_TASK } from "../actionTypes"

const initState = {
    taskList: [{
        id: 1,
        name: "Task 1"
    }, {
        id: 2,
        name: "Task 2"
    }, {
        id: 3,
        name: "Task 3"
    }]
}

const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_TASK:
            return {
                ...state,
                taskList: state.taskList
            }
        case DELETE_TASK:
            state.taskList = state.taskList.filter(item => item.id !== action.payload.task.id)
            return {
                ...state,
                taskList: state.taskList
            }
        default:
            return state;
    }
}

export default taskReducer