import React, { useRef, useEffect } from 'react'

import '@material/mwc-circular-progress/mwc-circular-progress.js'
import './LoadingView.css'

// possible options for the text on the loading screen, to keep it varied!
const loadingMessages = [

  "Navigating minerva...",
  "Searching ratemyprofessors...",
  "Determining the best schedule...",
  "Intense work! Almost there..."

]

export default function LoadingView () {

  // get a reference to the paragraph so we can add text to it
  let p = useRef(null);

  useEffect(() => {

    let currentMessage = 0;

    const showMessage = () => {

      // empty the loading messge
      // @ts-ignore
      p.current.textContent = "‍";

      // get the message
      const characters = loadingMessages[currentMessage].split('');
      let currentCharacter = 0;

      console.log(characters)

      // loop through all the characters and show them one at a time...
      const interval = setInterval(() => {
        if (currentCharacter === characters.length) { clearInterval(interval) }
        else {
          // @ts-ignore
          p.current.textContent += characters[currentCharacter];
          currentCharacter++; 
        }
      }, 50);

      // increase the current message for the next one
      currentMessage++;

    }

    showMessage();

    const interval = setInterval(() => {

      if (currentMessage === loadingMessages.length) { clearInterval(interval) }
      else { showMessage() }
    }, 10000);

  }, []);

  return (
    <div className='loading'>
      <mwc-circular-progress indeterminate></mwc-circular-progress>
      <p className='loading-message' ref={p}></p>
    </div>
  )

}