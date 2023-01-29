import { Course } from '../types/course'
import Calendar from './Calendar'
import colours from '../colours'

export default function ScheduleView ({ schedule }: { schedule: Course[] }) {

  return (
    <div className="suggested-schedule">
      <nav className="nav-pane">

        <h2 className="nav-h2-text">Rate my Professor Stats</h2>

        {schedule.map((course, i) => {
          return (
            <div className="prof" style={{ background: colours[i] }}>
              <p className="prof-name">{course.department} {course.code}</p>
              <p className="prof-name">{course.instructor}</p>
              <p className="prof-details">CRN: {course.crn}</p>
              <p className="prof-details">Quality: {"⭐️".repeat(Math.round(course.score))}</p>
              <p className="prof-details">Difficulty: {"⭐️".repeat(Math.round(course.difficulty))}</p>
            </div>
          )
        })}


      </nav>

      <main className="content-pane">

        <h1>Class Schedule Builder</h1>
        

        <h2 className="term-text">Winter 2023</h2>

        <Calendar startTime={8} endTime={22} schedule={schedule}></Calendar>

      </main>
    </div>
  )

}