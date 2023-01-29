import './App.css'
import Calendar from './components/Calendar'
import { Course } from './types/course'

const TEST_SCHEDULE: Course[] = [

  {
    department: 'MATH',
    code: 141,
    startTime: 13,
    endTime: 14.5,
    days: [ false, true, false, true, false ]
  },
  {
    department: 'PHYS',
    code: 142,
    startTime: 13.5,
    endTime: 14.5,
    days: [ true, false, true, false, true ]
  },
  {
    department: 'COMP',
    code: 202,
    startTime: 14.5,
    endTime: 15.5,
    days: [ true, false, true, false, true ]
  },
  {
    department: 'CHEM',
    code: 120,
    startTime: 10.5,
    endTime: 11.5,
    days: [ true, false, true, false, true ]
  },
  {
    department: 'WCOM',
    code: 206,
    startTime: 8.5,
    endTime: 10,
    days: [ false, true, false, true, false ]
  }

]

function App() {
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

        <Calendar startTime={8} endTime={22} schedule={TEST_SCHEDULE}></Calendar>

      </main>
    </div>
  )
}

export default App
