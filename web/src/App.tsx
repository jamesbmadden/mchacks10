import React, { useState, useEffect } from 'react'
import './App.css'
import { Course } from './types/course'
import ScheduleView from './components/ScheduleVIew'
import LoadingView from './components/LoadingView'

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

  return (
    <>
      <LoadingView></LoadingView>
      {isLoaded && <ScheduleView schedule={schedule}></ScheduleView>}
    </>
  )

  if (isLoaded) return 
  else return 
}

export default App
