const TaskBubble = ({ top, left, size, color, title }) => {
    const bubbleStyle = {
        top: top,
        left: left,
        width: size,
        height: size,
        backgroundColor: color
    }

    return (
        <div className='task-bubble' style={bubbleStyle}>
            <h1>{title}</h1>
        </div>
    )
}

export default TaskBubble