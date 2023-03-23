const Bubble = ({ top, left, size }) => {
    const bubbleStyle = {
        top,
        left,
        width: size,
        height: size,
    }
    return (
        <div className='bubble'
        style={bubbleStyle}></div>
    )
}

export default Bubble