import TaskCard from "./TaskCard"

const TaskCollection = () => {

    const numCards = 12
    const colors = Array.from({length: numCards}, () => `hsl(${Math.floor(Math.random()*360)}, ${100}%, ${75}%)`)

    let taskCards = []
    for (let i=0; i<numCards; i++) {
        taskCards.push(<TaskCard 
            color={colors[i]} 
            title={`Task ${i}`}
            text={`This is text for task ${i}`}/>)
    }

    return (
        <div className='task-collection'>
            {taskCards}
        </div>
    )
}

export default TaskCollection