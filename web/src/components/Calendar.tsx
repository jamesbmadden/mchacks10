import React from 'react'
import './calendar.css'

interface CalendarProps {
  startTime: number,
  endTime: number,
  courses: string[]
}

export default function Calendar ({ startTime, endTime, courses }: CalendarProps) {

  // figure out how many rows are needed in the calendar
  const rows = (endTime - startTime) * 2;

  return (
    <div className='calendar' style={{gridTemplateRows: `repeat(${rows + 1}, 1fr)`}}>

      {/* row to show each day of the week */}
      <p className='calendar-day'>Monday</p>
      <p className='calendar-day'>Tuesday</p>
      <p className='calendar-day'>Wednesday</p>
      <p className='calendar-day'>Thursday</p>
      <p className='calendar-day'>Friday</p>

      { /* iterate over all the rows and create a label for the time
            Array.from(...) makes an array rows long that can be iterated over */}
      {Array.from(Array(rows)).map((_, i) => {
        return <p className='calendar-time' style={{gridRow: i + 2}}>{toTimeString(startTime + 0.5 * i)}</p>
      })}

    </div>
  )

}

function toTimeString(time: number): string {

  // get just the hour as a number
  const hour: number = Math.floor(time);

  // if the remainder when divided by one is .5 (so its 30 past), then add a :30 to the hour. Otherwise, add :00
  if (time % 1 == 0.5) return hour + ":30"
  else return hour + ":00"

}