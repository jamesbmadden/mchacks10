import { Course } from '../types/course'
import Calendar from './Calendar'

export default function ScheduleView ({ schedule }: { schedule: Course[] }) {

  return (
    <div className="suggested-schedule">
      <nav className="nav-pane">

        <h2 className="nav-h2-text">Rate my Professor Stats</h2>

        <div className="prof" style={{ background: '#f48fb1' }}>
          <p className="prof-name">MATH 141</p>
          <p className="prof-name">Sidney Trudeau</p>
          <p className="prof-details">Quality: ⭐️⭐️⭐️⭐️⭐️</p>
          <p className="prof-details">Difficulty: ⭐️⭐️⭐️⭐️⭐️</p>
        </div>

        <div className="prof" style={{ background: '#81d4fa' }}>
          <p className="prof-name">PHYS 142</p>
          <p className="prof-name">Hong Guo</p>
          <p className="prof-details">Quality: ⭐️⭐️⭐️⭐️⭐️</p>
          <p className="prof-details">Difficulty: ⭐️⭐️⭐️⭐️⭐️</p>
        </div>

        <div className="prof" style={{ background: '#ce93d8' }}>
          <p className="prof-name">COMP 202</p>
          <p className="prof-name">Comp Prof</p>
          <p className="prof-details">Quality: ⭐️⭐️⭐️⭐️⭐️</p>
          <p className="prof-details">Difficulty: ⭐️⭐️⭐️⭐️⭐️</p>
        </div>

        <div className="prof" style={{ background: '#aed581' }}>
          <p className="prof-name">CHEM 120</p>
          <p className="prof-name">Pallavi Sirjoosingh</p>
          <p className="prof-details">Quality: ⭐️⭐️⭐️⭐️⭐️</p>
          <p className="prof-details">Difficulty: ⭐️⭐️⭐️⭐️⭐️</p>
        </div>

        <div className="prof" style={{ background: '#ffab91' }}>
          <p className="prof-name">WCOM 206</p>
          <p className="prof-name">Emilia Popova</p>
          <p className="prof-details">Quality: ⭐️⭐️⭐️⭐️⭐️</p>
          <p className="prof-details">Difficulty: ⭐️⭐️⭐️⭐️⭐️</p>
        </div>


      </nav>

      <main className="content-pane">

        <h1>Class Schedule Builder</h1>
        

        <h2 className="term-text">Winter 2023</h2>

        <Calendar startTime={8} endTime={22} schedule={schedule}></Calendar>

      </main>
    </div>
  )

}