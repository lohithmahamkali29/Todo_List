import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
  <div className= 'container'>
     <h1 id = 'heading'> TODO APP</h1>

    <div id='child-1'>
    <input type ='text' className='inp-box'/>
    <button id = 'btn' >Add Task</button>
  </div>

   <div className='child-2'>

    <div className ='ongoing'>
      <h2>Ongoing Tasks</h2>
      {/* <input type='text' className=''/>
      <button>Add Task</button> */}
    </div>

    <div className = 'completed'>
      <h2>Completed Tasks</h2>
      {/* <input type='text' className=''/>
      <button>Add Task</button> */}
    </div>
   </div>
   
  </div>
  
    </>
  )
}

export default App
