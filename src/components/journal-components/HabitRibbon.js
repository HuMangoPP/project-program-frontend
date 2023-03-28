const HabitRibbon = ({ text, color }) => {

    const topTriangleStyle = {
        background: `linear-gradient(to right bottom, ${color} 0 50%, transparent 50% 100%)`
    }

    const bottomTriangleStyle = {
        background: `linear-gradient(to right top, ${color} 0 50%, transparent 50% 100%)`
    }

    const ribbonStyle = {
        backgroundColor: color,
    }

    return (
        <div className='habit-ribbon'>
            <div className='habit-ribbon-textbox' style={ribbonStyle}>
                <p className='habit-ribbon-text'>{text}</p>
            </div>
            <div className='habit-ribbon-triangles'>
                <div className="ribbon-top" style={topTriangleStyle}></div>
                <div className='ribbon-bottom' style={bottomTriangleStyle}></div>
            </div>
        </div>
    )
}

export default HabitRibbon