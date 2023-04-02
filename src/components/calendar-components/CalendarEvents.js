import { BsCalendarPlus } from 'react-icons/bs'
import CalendarEvent from './CalendarEvent'
import { MdNotifications } from 'react-icons/md'

const CalendarEvents = ({ eventData, openForm, handleDelete, handleToggle, notifState }) => {

    const events = eventData.map((e, i) => {
        return <CalendarEvent key={`reminder-${i}`}
                            reminder={eventData[i].title}
                            dateTime={eventData[i].dateTime}
                            reminderId={eventData[i].reminderId} 
                            handleDelete={handleDelete} />
    })

    return (
        <div className='calendar-events-container'>
            <div className='calendar-events-header'>
                <h1>Reminders</h1>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around'
                    }}>
                        <MdNotifications size={'2.25vw'} />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around'
                    }}>
                        <input type='checkbox' className='slider' id='notif-switch'
                           checked={notifState} 
                           onChange={() => {
                            handleToggle(notifState)
                            }} />
                        <label className='notif-switch' ></label>
                    </div>
                    <div  className='add-event'>
                        <BsCalendarPlus size={'2.25vw'} onClick={() => openForm()}/>
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

