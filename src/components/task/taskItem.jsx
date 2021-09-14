// import { useDispatch } from "react-redux"
// import { DELETE_TASK } from "../../actionTypes"

import useTaskHook from "../../hooks/useTaskHook"

const TaskItem = ({ task }) => {
    // Dung cho cach 1 va 2
    // const dispatch = useDispatch()

    // const handleDeleteTask = () => {
    //     dispatch({
    //         type: DELETE_TASK,
    //         payload: {
    //             task
    //         }
    //     })
    // }

    // Cach 3
    const { deleteTask } = useTaskHook()

    return <li>
        {task.name}
        {"---->"}
        <i
            // onClick={handleDeleteTask}
            onClick={() => deleteTask(task)}
            style={{ cursor: "pointer" }}
            className="far fa-trash-alt">
        </i>
    </li>
}

export default TaskItem