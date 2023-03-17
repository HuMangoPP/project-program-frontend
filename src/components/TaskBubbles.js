import TaskBubble from './TaskBubble'

const TaskBubbles = () => {
    const numBubbles = 12
    const tops = Array.from({length: numBubbles}, () => `${Math.floor(Math.random()*90)+5}%`)
    const lefts = Array.from({length: numBubbles}, () => `${Math.floor(Math.random()*90)+5}%`)
    const sizes = Array.from({length: numBubbles}, () => `${10}em`)
    const colors = Array.from({length: numBubbles}, () => `hsl(${Math.floor(Math.random()*360)}, ${100}%, ${75}%)`)
    
    let taskBubbles = []
    for (let i=0; i<numBubbles; i++) {
        taskBubbles.push(<TaskBubble 
                            top={tops[i]} 
                            left={lefts[i]} 
                            size={sizes[i]} 
                            color={colors[i]} 
                            title={`Task ${i}`} />)
    }

    return (
        <div className='task-bubbles' >
            {taskBubbles}
        </div>
    )
}

export default TaskBubbles