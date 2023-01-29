import React, { useState, useEffect } from 'react'
import './App.css'
import { Course } from './types/course'
import ScheduleView from './components/ScheduleVIew'

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

  const [ isLoaded, setIsLoaded ] = useState(false)
  const [ schedule, setSchedule ] = useState([])

  useEffect(() => {

    fetch('/api/schedule/COMP,PHYS,MATH/208,142,141/True').then(response => response.json()).then(json => {

      // here's the data! now we build the ideal schedule! 
      let courses = [];

      console.log(json);

      for (let i = 0; i < json.courses.length; i++) {
        courses.push(json.courses[i][parseInt(json.record_holder[i]) - 1])
      }

      // @ts-ignore
      setSchedule(courses)
      setIsLoaded(true)

    });

  }, [])

  if (isLoaded) return <ScheduleView schedule={schedule}></ScheduleView>
  else return <p>loading...</p>
}

export default App
