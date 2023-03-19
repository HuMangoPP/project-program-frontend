import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TaskCard = ({ title, text, color }) => {

    const navigate = useNavigate()

    const cardStyle = {
        backgroundColor: color
    }

    const rightTriangleStyle = {
        background: `linear-gradient(to right bottom, ${color} 0 50%, transparent 50% 100%)`
    }

    const leftTriangleStyle = {
        background: `linear-gradient(to left bottom, ${color} 0 50%, transparent 50% 100%)`
    }

    const [face, setFace] = useState(false)

    return (
        <div className='task-card'
             onClick={() => navigate('/task')}
             onMouseOut={() => setFace(false)}
             onMouseOver={() => setFace(true)}>
            <div className='task-card-text' style={cardStyle}>
            {face ? <p>{text}</p> :
                    <h1>{title}</h1>}
            </div>
            {face ? 
            <div className='task-card-triangles'>
                <div className='task-card-right-triangle' style={rightTriangleStyle}></div>
                <div className='task-card-left-triangle' style={leftTriangleStyle}></div>
            </div> : <div></div>}
        </div>
    )
}

export default TaskCard