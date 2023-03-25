import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const WarpButton = ({ link, text, top, left }) => {

    const navigate = useNavigate()
    const [surroundingBubbleDivs, setSurroundingBubbles] = useState([])

    useEffect(() => {
        const numSurrounding = 10

        const angles = Array.from({length: numSurrounding}, () => Math.floor(Math.random()*360))
        const radii = Array.from({length: numSurrounding}, () => Math.floor(-Math.random()*10+15))
        const sizes = Array.from({length: numSurrounding}, () => `${Math.floor(Math.random()*3+3)}em`)
        
        let surroundingBubbles = []
        for (let i=0; i<numSurrounding; i++) {
            let xRel = `${left + radii[i] * Math.cos(Math.PI/180 * angles[i])}%`
            let yRel = `${top + radii[i] * Math.sin(Math.PI/180 * angles[i])}%`
            
            const smallBubbleStyle = {
                top: yRel,
                left: xRel,
                width: sizes[i],
                height: sizes[i]
            }

            surroundingBubbles.push(
            <div style={smallBubbleStyle} 
                className='surrounding-bubbles'></div>
            )
        }

        setSurroundingBubbles(surroundingBubbles)
    }, [])

    const styling = {
        top: `${top}%`,
        left: `${left}%`,
    }

    return (
        <>
            {surroundingBubbleDivs}
            <div className='warp-btn'
                 onClick={() => navigate(link)}
                 style={styling}>
                <h1>{text}</h1>
            </div>
        </>
    )
}

export default WarpButton