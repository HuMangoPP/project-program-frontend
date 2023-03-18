const TaskBubble = ({ top, left, color, title }) => {
    const bubbleStyle = {
        top: top,
        left: left,
        backgroundColor: color
    }

    window.addEventListener('mousemove', e => {

    })

    return (
        <div className='task-bubble' style={bubbleStyle}
             onClick={() => {
                window.location.href = '/task'
             }}>
            <h1>{title}</h1>
        </div>
    )
}

export default TaskBubble