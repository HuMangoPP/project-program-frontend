import { useNavigate } from 'react-router-dom'

const WarpButton = ({ link, text, top, left }) => {

    const navigate = useNavigate()

    const styling = {
        top: `${top}%`,
        left: `${left}%`,
    }

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

    return (
        <>
            {surroundingBubbles}
            <div className='warp-btn'
                 onClick={() => navigate(link)}
                 style={styling}>
                <h1>{text}</h1>
            </div>
        </>
    )
}

export default WarpButton