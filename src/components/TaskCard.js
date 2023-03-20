import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TaskCard = ({ title, text, color }) => {

    const navigate = useNavigate()

    const rightTriangleStyle = {
        background: `linear-gradient(to right bottom, ${color} 0 50%, transparent 50% 100%)`
    }

    const leftTriangleStyle = {
        background: `linear-gradient(to left bottom, ${color} 0 50%, transparent 50% 100%)`
    }

    const cardStyle = {
        backgroundColor: color
    }

    const [face, setFace] = useState(false)

    const textStyle = {
        display: `${face ? 'block' : 'none'}`
    }

    const titleStyle = {
        display: `${face ? 'none' : 'block'}`
    }

    const triangleStyle = {
        display: `${face ? 'flex' : 'none'}`
    }

    return (
        <div className='task-card'
             onClick={() => navigate('/task')}
             onMouseOut={() => setFace(false)}
             onMouseOver={() => setFace(true)}>
            <div className='task-card-text' style={cardStyle}>
                <h1 style={titleStyle}>{title}</h1>
                <p style={textStyle}>{text}</p>
            </div>
            <div className='task-card-triangles' style={triangleStyle}>
                <div className='task-card-right-triangle' style={rightTriangleStyle}></div>
                <div className='task-card-left-triangle' style={leftTriangleStyle}></div>
            </div>
        </div>
    )
}

export default TaskCard