import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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
            <motion.div style={smallBubbleStyle} 
                className='surrounding-bubbles'
                initial={{ opacity: 0, transform: 'translate(-50%, -50%) scale(0)' }}
                animate={{ opacity: .5, transform: 'translate(-50%, -50%) scale(1)' }}
                exit={{ opacity: 0, transform: 'translate(-50%, -50%) scale(0)' }}
                transition={{ duration: 1 }}></motion.div>
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
            <motion.div className='warp-btn'

            initial={{ opacity: 0, transform: 'translate(-50%, -50%) scale(0)' }}
            animate={{ opacity: .75, transform: 'translate(-50%, -50%) scale(1)' }}
            exit={{ opacity: 0, transform: 'translate(-50%, -50%) scale(0)' }}
            transition={{ duration: 1 }}
                style={styling}
                 onClick={() => navigate(link)}>
                <h1>{text}</h1>
            </motion.div>
        </>
    )
}

export default WarpButton