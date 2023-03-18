import { useState } from "react"
// import FullCalendar, { formatDate } from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'
// import listPlugin from '@fullcalendar/list'
import Calendar from 'react-calendar'

const OpenedCalendar = ({ onClose }) => {

    const [currentEvents, setCurrentEvents] = useState([])
    const [date, setDate] = useState(new Date())

    // const handleDateClick = (selected) => {
    //     const title = prompt('Please enter a new title for your event')
    //     const calendarApi = selected.view.calendar
    //     calendarApi.unselect()

    //     if (title) {
    //         calendarApi.addEvent({
    //             id: `${selected.dateStr}-${title}`,
    //             title,
    //             start: selected.startStr,
    //             end: selected.endStr,
    //             allDay: selected.allDay,
    //         })
    //     }
    // }

    // const handleEventClick = (selected) => {
    //     if (window.confirm(`Are you sure you want to delete the event ${selected.event.title}?`)) {
    //         selected.event.remove()
    //     }
    // }

    return (
        <div className='opened-calendar' onClick={onClose}>
            <div className='calendar-container'>
                {/* <FullCalendar 
                    height='50vh'
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin
                    ]}
                    headerToolbar={{
                        left: 'prev, next, today',
                        center: 'title',
                        right: 'dayGridMonth, timeGridWeek, timeGridDay, listMonth'
                    }}
                    initialView='dayGridMonth'
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet={(events) => setCurrentEvents(events)}
                    initialEvents={[
                        { id: '1234', title: 'All day event', date: '2023-03-17' },
                        { id: '4321', title: 'Timed event', date: '2023-03-18' },
                    ]}
                    /> */}
                <Calendar onChange={setDate} value={date} />
            </div>
        </div>
    )
}

export default OpenedCalendar