import React, { ReactElement } from 'react'
import './Calendar.css'
import { Course } from '../types/course';
import colours from '../colours';

interface CalendarProps {
  startTime: number,
  endTime: number,
  schedule: Course[]
}



export default function Calendar ({ startTime, endTime, schedule }: CalendarProps) {

  // figure out how many rows are needed in the calendar
  const rows = (endTime - startTime) * 2;

  return (
    <div className='calendar' style={{gridTemplateRows: `repeat(${rows + 1}, 1fr)`}}>

      {/* row to show each day of the week */}
      {/* <p className='calendar-day'>Mon</p>
      <div className='calendar-vertical-gridline'></div>
      <p className='calendar-day'>Tue</p>
      <p className='calendar-day'>Wed</p>
      <p className='calendar-day'>Thu</p>
      <p className='calendar-day'>Fri</p> */}


      {['Mon', 'Tue', 'Wed', 'Thu'].map((day, i) => {
        return (<>
          <p className='calendar-day' style={{ gridColumn: i + 2 }}>{ day }</p>
          <div className='calendar-vertical-gridline' style={{gridColumn: i + 3}}></div>
        </>)
      })}
      
      <p className='calendar-day' style={{ gridColumn: 6 }}>Fri</p>

      { /* iterate over all the rows and create a label for the time
            Array.from(...) makes an array rows long that can be iterated over.
            Also return a div that will act as a grid line for this row */}
      {Array.from(Array(rows)).map((_, i) => {
        return (<>
          <p className='calendar-time' style={{gridRowStart: i + 2}}>{toTimeString(startTime + 0.5 * i)}</p>
          <div className='calendar-gridline' style={{gridRow: i + 2}}></div>
        </>)
      })}

      { /* Iterate over the items in the schedule and generate a component for each day the course happens */}
      {schedule.map((course, index) => {

        // for each course, map over the week days and if the class happens that day, return a component
        return course.days.map((happensToday, day) => {

          // if the course doesn't happen today, return nothing
          if (!happensToday) return;

          const startRow = (course.startTime - startTime) * 2 + 2
          const endRow = (course.endTime - startTime) * 2 + 2

          return <div className='calendar-course' style={{background: colours[index], gridColumn: day + 2, gridRowStart: startRow, gridRowEnd: endRow}}>{course.department} {course.code}</div>

        })

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