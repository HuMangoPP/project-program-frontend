const Bubble = ({ top, left, size }) => {
    const bubbleStyle = {
        top: top,
        left: left,
        width: size,
        height: size,
    }
    return (
        <div className='bubble'
        style={bubbleStyle}></div>
    )
}

export default Bubble