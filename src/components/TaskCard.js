import { useState } from 'react'

const TaskCard = ({ title, text, color }) => {

    const cardStyle = {
        backgroundColor: color
    }

    const [face, setFace] = useState(false)

    return (
        <div className='task-card' style={cardStyle}
             onClick={() => {
                window.location.href = '/task'
             }}
             onMouseOver={() => setFace(true)}
             onMouseOut={() => setFace(false)}>
            {face ? <p>{text}</p> :
                    <h1>{title}</h1>}
        </div>
    )
}

export default TaskCard