import { useDispatch, useSelector } from "react-redux"
import { DELETE_TASK } from "../actionTypes"

const useTaskHook = () => {
    const taskList = useSelector(state => state.task.taskList)

    const dispatch = useDispatch()
    const deleteTask = (task) => {
        dispatch({
            type: DELETE_TASK,
            payload: {
                task
            }
        })
    }

    return { taskList, deleteTask }
}

export default useTaskHook