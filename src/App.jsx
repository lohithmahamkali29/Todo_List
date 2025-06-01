import { useState } from 'react'
import './App.css'

function App() {

   const[task,setTask] = useState(["Learn React"])
   const[completed,setCompleted] = useState(["Learn react"])
  return (
    <>
  <div className= 'container'>

    <div>
      <h1 id = 'heading'> TODO APP......</h1>

    </div>
     
    <div id='child-1'>
    <input type ='text' className='inp-box'/>
    <button id = 'btn' >Add Task</button>
  </div> 

   <div className='child-2'>

    <div className ='ongoing'>
      <h2>Ongoing Tasks</h2>
      {task.map(item => <li>{item}</li>)}
      {/* <input type='text' className=''/>
      <button>Add Task</button> */}
    </div>

    <div className = 'completed'>
      <h2>Completed Tasks</h2>
      {completed.map(item => <li>{item}</li>)}
      {/* <input type='text' className=''/>
      <button>Add Task</button> */}
    </div>
   </div>
   
  </div>
  
    </>
  )
}

export default App



// using  percentages when we have a single column for width and that we use px