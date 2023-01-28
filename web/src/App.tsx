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
  }

]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Schedule Builder :)</h1>
      <Calendar startTime={8} endTime={22} schedule={TEST_SCHEDULE}></Calendar>
    </div>
  )
}

export default App
