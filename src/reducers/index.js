import { combineReducers } from "redux";
import taskReducer from "./task.reducer";

const rootReducer = combineReducers({
    task: taskReducer
})

export default rootReducer