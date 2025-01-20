import React, { useState } from 'react'

const TaskManager = () => {

  const [tasks,setTasks] =useState([]);
  const [task,setTask] =useState("");


  const addTask =() =>
  {
    if(task !=="")
    {
      setTasks([...tasks,
        {id :Date.now(),text :task ,completed :false}
      ]);
      setTask('');
    }
  }
  const toggleComplete =(taskId)=>
  {
    setTasks(tasks.map((task)=>task.id === taskId?
    {...task,completed :!task.completed}:task))
  }

  const deleteTask=(taskId)=>
  {
    setTasks(tasks.filter((task)=>task.id !== taskId))
  }
  return (
    <div className='App'>
      <h1>Get Things Done</h1>
      <input type='text' placeholder='Add a Task' value={task} onChange={(e)=>{setTask(e.target.value)}} />
      <button type='submit' onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task)=>(<li key={task.id} style={{textDecoration :task.completed ? 'line-through' :'none'}}>
            {task.text} <button onClick={()=>toggleComplete(task.id)}>{task.completed ? 'undo':'Complete'}</button>
                        <button onClick={()=>deleteTask(task.id)}>Delete</button>

          </li>)
        )}
      </ul>
    </div>
  )
}

export default TaskManager
