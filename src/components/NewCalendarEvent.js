
const NewCalendarEvent = () => {
    return (
        <div className='new-calendar-event'>
            <h1>New Event</h1>
            <form className='new-calendar-form'>
                <label>Event Title</label>
                <input type='text' className='new-calendar-event-title'></input>
                <label>Event Description</label>
                <textarea 
                type='text'
                cols='10'
                className='new-calendar-event-input'></textarea>
                <input type='submit' value='Submit' className='calendar-form-submit'/>
                <label>Start Time</label>
                <input type='text'></input>
                <div>
                    <button onClick={(e) => e.preventDefault()}>AM</button>
                    <button onClick={(e) => e.preventDefault()}>PM</button>
                </div>
                <label>End Time</label>
                <input type='text'></input>
                <div>
                    <button onClick={(e) => e.preventDefault()}>AM</button>
                    <button onClick={(e) => e.preventDefault()}>PM</button>
                </div>
            </form>
        </div>
    )
}

export default NewCalendarEvent