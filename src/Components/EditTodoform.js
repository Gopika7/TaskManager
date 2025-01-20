import { useState } from "react"
import React from 'react'
export const EditTodoform = ({editTodo,task}) => {
 const [value,setValue] =useState(task.task  );
 const handleSubmit=e=>
 {
   e.preventDefault();    
   editTodo(value,task.id);
   setValue("")
 }
 return (
<form className='Todoform' onSubmit={handleSubmit}>
<input type="text" className='todo-input' placeholder='update task' onChange={(e) => setValue(e.target.value)} value={value}/>
<button type='submit' className='todo-btn'>Update task</button>
</form>
 )
}
export default EditTodoform