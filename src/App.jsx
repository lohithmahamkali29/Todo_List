import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState(["Learn React"])
  const [completed, setCompleted] = useState(["Learn reacta"])
  const [text, setText] = useState("")

  // ✅ Delete a task
  const deleteTask = (index) => {
    const updatedTasks = [...task]
    updatedTasks.splice(index, 1)
    setTask(updatedTasks)
  }

  // ✅ Mark a task as completed
  const completeTask = (index) => {
    setTimeout(() => {
      const updatedTasks = [...task]
    const [doneTask] = updatedTasks.splice(index, 1)
    setCompleted([...completed, doneTask])
    setTask(updatedTasks)
    },500)
  }

  return (
    <>
      <div className='container'>
        <div>
          <h2 id='heading'>TODO APP...</h2>
        </div>

        <div id='child-1'>
          <input
            type='text'
            className='inp-box'
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder='Add something'
          />
          <button
            id='btn'
            onClick={() => {
              if (text.trim() !== '') {
                setTask([...task, text])
                setText('')
              }
            }}
          >
            Add Task
          </button>
        </div>

        <div className='child-2'>
          <div className='ongoing'>
            <h2>Ongoing Tasks</h2>
            {task.map((item, index) => (
              <div className='rendered-tasks' key={index}>
                <input
                  type='checkbox'
                  onClick={() => completeTask(index)}
                />
                <li>{item}</li>
                <img
                  src="./delete.png"
                  width="30"
                  alt="delete"
                  onClick={() => deleteTask(index)}
                />
              </div>
            ))}
          </div>

          <div className='completed'>
            <h2>Completed Tasks</h2>
            {completed.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
