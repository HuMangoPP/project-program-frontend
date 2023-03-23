
const NewCalendarEvent = () => {

    return (
        <div className='new-calendar-event'>
            <h1>New Event</h1>
            <div className='new-calendar-form-title'>
                <label>Event Title</label>
                <input type='text' className='new-calendar-event-title'></input>
            </div>
            <div className='new-calendar-form-desc'>
                <label>Event Description</label>
                <textarea type='text' className='new-calendar-event-desc'></textarea>
            </div>
            <div className='new-calendar-form-time'>
                <div className='new-calendar-form-start'>
                    <label>Start Time</label>
                    <div className='new-calendar-event-start'>
                        <input type='time'></input>
                    </div>
                </div>
                <div className='new-calendar-form-end'>
                <label>End Time</label>
                    <div className='new-calendar-event-end'>
                        <input type='time' className='new-calendar-event-end'></input>
                    </div>
                </div>
            </div>
            <button className='submit-btn' onClick={() => console.log('click')}>New Event</button>
        </div>
    )
}

export default NewCalendarEvent