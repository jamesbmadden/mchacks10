import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import { Course } from './types/course'
import ScheduleView from './components/ScheduleView'
import LoadingView from './components/LoadingView'

function App() {

  const [needsInput, SetNeedsInput] = useState(true);

  const [ isLoaded, setIsLoaded ] = useState(false)
  const [schedule, setSchedule] = useState([])

  const [ courses, setCourses ] = useState([])

  const [ courseCount, setCourseCount ] = useState(1)

  const form = useRef(null)

  useEffect(() => {

    if (needsInput) return;

    console.log(courses);

    // get the course codes and departments out of the courses array
    const departments = courses.map(course => course[0]);
    const codes = courses.map(course => course[1]);

    fetch(`/api/schedule/${departments.join(',')}/${codes.join(',')}/True`).then(response => response.json()).then(json => {

      // here's the data! now we build the ideal schedule! 
      let courses = [];

      console.log(json);

      for (let i = 0; i < json.courses.length; i++) {
        courses.push(json.courses[i][parseInt(json.record_holder[i]) - 1])
      }

      // @ts-ignore
      setSchedule(courses)
      setIsLoaded(true)

    }).catch(error => {
      SetNeedsInput(true);
      alert("Looks like Rate my Professor had an issue. Maybe try again?");
    });

  }, [needsInput])

  if (needsInput) return (
    <div className='page'>

      <h1>Class Schedule Builder</h1>

      <p>Input courses:</p>
      <div className="form" ref={form}>
        {/* Get however many inputs we need */}
        {Array.from(Array(courseCount)).map((_, i) => {
          return <input className="course-input" key={i} id={"course-input-" + i} placeholder="MATH 141"></input>
        })}
        <div className='input-buttons'>
          <button className='input-addbutton' onClick={() => setCourseCount(courseCount + 1)}>+</button>
          <button className='input-addbutton' onClick={() => setCourseCount(courseCount - 1)} disabled={courseCount === 1}>-</button>
        </div>
          
      </div>
      <button onClick={() => {

        // get the courses from the form
        // @ts-ignore
        let enteredCourses = [];
        // @ts-ignore
        form.current.querySelectorAll('.course-input').forEach(input => {

          const [department, code] = input.value.split(" ");

          enteredCourses.push([department.toUpperCase(), code]);

        });
        
        // @ts-ignore
        setCourses(enteredCourses)

        SetNeedsInput(false)
      }}>Make Schedule!</button>

      <p className='footer'>Made with ♥ by The Serpents</p>
    </div>
  );
  else return (
    <>
      
      <LoadingView></LoadingView>
      {isLoaded && <ScheduleView schedule={schedule}></ScheduleView>}
    </>
  )
}

export default App
