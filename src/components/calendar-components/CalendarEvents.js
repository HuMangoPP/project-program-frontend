import { BsCalendarPlus } from 'react-icons/bs'
import CalendarEvent from './CalendarEvent'
import { useState } from 'react'

const CalendarEvents = ({ eventData, openForm, handleDelete }) => {

    const events = eventData.map((e, i) => {
        return <CalendarEvent reminder={eventData[i].title}
                            dateTime={eventData[i].dateTime}
                            reminderId={eventData[i].reminderId} 
                            handleDelete={handleDelete} />
    })

    const [notifState, setNotifState] = useState(false)

    return (
        <div className='calendar-events-container'>
            <div className='calendar-events-header'>
                <h1>Reminders</h1>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <input type='checkbox' className='slider' id='notif-switch'
                           checked={notifState} onChange={() => setNotifState(!notifState)} />
                    <label className='notif-switch' for='notif-switch'>Toggle</label>
                    <div  className='add-event'>
                        <BsCalendarPlus size={'2em'} onClick={() => openForm()}/>
                    </div>
                </div>
            </div>
            <div className='calendar-events-list'>
                {events}
            </div>
        </div>
    )
}

export default CalendarEvents

