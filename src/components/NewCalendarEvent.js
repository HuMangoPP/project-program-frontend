
const NewCalendarEvent = ({ closeForm }) => {

    const handleSubmit = e => {
        e.preventDefault()

        const title = document.getElementById('new-calendar-event-title').value
        const desc = document.getElementById('new-calendar-event-desc').value
        const startTime = document.getElementById('new-calendar-event-start').value
        const endTime = document.getElementById('new-calendar-event-end').value

        if (!title) return

        if (!desc) return

        if (!startTime) return

        if (!endTime) return

        console.log({
            title,
            desc,
            startTime,
            endTime
        })

        closeForm()
    }

    return (
        <div className='new-calendar-event'>
            <h1>New Event</h1>
            <div className='new-calendar-form-title'>
                <label>Event Title</label>
                <input type='text' 
                       className='new-calendar-event-title'
                       id='new-calendar-event-title'></input>
            </div>
            <div className='new-calendar-form-desc'>
                <label>Event Description</label>
                <textarea type='text' 
                          className='new-calendar-event-desc'
                          id='new-calendar-event-desc'></textarea>
            </div>
            <div className='new-calendar-form-time'>
                <div className='new-calendar-form-start'>
                    <label>Start Time</label>
                    <div className='new-calendar-event-start'>
                        <input type='time' id='new-calendar-event-start'></input>
                    </div>
                </div>
                <div className='new-calendar-form-end'>
                <label>End Time</label>
                    <div className='new-calendar-event-end'>
                        <input type='time' id='new-calendar-event-end'></input>
                    </div>
                </div>
            </div>
            <div className='btn-container'>
                <button className='submit-btn' onClick={handleSubmit}>New Event</button>
                <button className='submit-btn' onClick={() => closeForm()}>Close</button>
            </div>
        </div>
    )
}

export default NewCalendarEvent