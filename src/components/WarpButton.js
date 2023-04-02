import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const WarpButton = ({ link, text, top, left }) => {

    const navigate = useNavigate()
    const [surroundingBubbleDivs, setSurroundingBubbles] = useState([])

    useEffect(() => {
        const numSurrounding = 10

        const angles = Array.from({length: numSurrounding}, () => Math.floor(Math.random()*360))
        const radii = Array.from({length: numSurrounding}, () => Math.floor(Math.random()*5+10))
        const sizes = Array.from({length: numSurrounding}, () => `${Math.floor(Math.random()*3+7)}vh`)
        
        let surroundingBubbles = []
        for (let i=0; i<numSurrounding; i++) {
            let xRel = `${left + radii[i] * Math.cos(Math.PI/180 * angles[i])}%`
            let yRel = `${top + radii[i] * Math.sin(Math.PI/180 * angles[i])}%`
            
            const smallBubbleStyle = {
                position: 'absolute',
                top: yRel,
                left: xRel,
                width: sizes[i],
                height: sizes[i]
            }

            surroundingBubbles.push(
            <div style={smallBubbleStyle} 
                className='surrounding-bubbles'
                ></div>
            )
        }

        setSurroundingBubbles(surroundingBubbles)
    }, [0])

    const styling = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
    }

    return (
        <motion.div
        style={styling}

        initial={{ opacity: 0, transformOrigin: `${left}% ${top}%`, transform: 'scale(0)' }}
        animate={{ opacity: .75, transformOrigin: `${left}% ${top}%`, transform: 'scale(1)' }}
        exit={{ opacity: 0, transformOrigin: `${left}% ${top}%`, transform: 'scale(0)' }}
        transition={{ duration: 1 }}
        >
            {surroundingBubbleDivs}
            <div className='warp-btn'
                 onClick={() => navigate(link)}
                 style={{
                    top: `${top}%`,
                    left: `${left}%`
                }}>
                <h1>{text}</h1>
            </div>
        </motion.div>
    )
}

export default WarpButton