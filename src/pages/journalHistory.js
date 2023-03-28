import Bubbles from "../components/Bubbles"
import TaskCollection from "../components/TaskCollection"

const TasksPage = () => {
    return (
        <div className='tasks-page'>
            <Bubbles />
            <TaskCollection />
        </div>
    )
}

export default TasksPage