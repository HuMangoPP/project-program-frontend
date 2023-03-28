import TaskCard from "./TaskCard"
import WarpButton from "./WarpButton"

const TaskCollection = () => {

    const numCards = 5
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
            <WarpButton link='/journal' text='Return to Journal' 
                        top={90} left={5} />
            {taskCards}
        </div>
    )
}

export default TaskCollection