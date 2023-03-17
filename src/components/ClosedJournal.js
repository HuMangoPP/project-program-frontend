
const ClosedJournal = ({ onOpen }) => {
    return (
        <div className='closed-journal'
             onClick={onOpen}>
            <h1>Journal</h1>
        </div>
    )
}

export default ClosedJournal