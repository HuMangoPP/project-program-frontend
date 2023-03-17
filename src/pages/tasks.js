import Bubbles from "../components/Bubbles"
import TaskBubbles from "../components/TaskBubbles"

const TasksPage = () => {
    return (
        <div className='tasks-page'>
            <Bubbles />
            <TaskBubbles />
        </div>
    )
}

export default TasksPage