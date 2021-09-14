// import { useSelector } from "react-redux"
// import { createSelector } from "reselect"
import TaskItem from "../../components/task/taskItem"
import useTaskHook from "../../hooks/useTaskHook"

const TaskPage = () => {
    // Cach 1
    // const taskSelector = createSelector((state) => state.task.taskList, (taskList) => taskList.filter(item => item.id === 1))
    // const taskList = useSelector(taskSelector)

    // Cach 2
    // const taskList = useSelector((state) => state.task.taskList)

    // Cach 3
    const { taskList } = useTaskHook()

    return <>
        <h1>Tasks list</h1>
        <ul>
            {
                taskList.map((item, index) => {
                    return <TaskItem key={index} task={item} />
                })
            }
        </ul>
    </>
}

export default TaskPage