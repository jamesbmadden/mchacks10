import { useState } from 'react'
import reactLogo from './assets/react.svg'
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
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav className="nav-pane"></nav>
      <main className="content-pane">
        <h1>Schedule Builder :)</h1>
        <Calendar startTime={8} endTime={22} schedule={TEST_SCHEDULE}></Calendar>
      </main>
    </div>
  )
}

export default App
