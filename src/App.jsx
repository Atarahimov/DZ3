

import { useState } from 'react'

import './App.css'

function App () {
  const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function AddTask () {
      setTasks([...tasks, newTask])
        setNewTask("")
    }

    return (
        <>
            <h1>Todo list</h1>
           <div>
               <input text = "type" value={newTask}onChange={(e)=> setNewTask(e.target.value)}/>
               <button onClick={AddTask}>Add Task</button>
           </div>

            <div>
              <ul>
                  {tasks.map((task)=>(
                      <li>{task}</li>
                  ))}
              </ul>
            </div>
        </>
    )
}



export default App