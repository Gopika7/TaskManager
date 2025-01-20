import { useState } from "react"
import React from 'react'

const Todoform = ({addTodo}) => {
 const [value,setValue] =useState("");
 const handleSubmit=e=>
 {
   e.preventDefault();    
   addTodo(value);
   setValue("")
 }
 return (
<form className='Todoform' onSubmit={handleSubmit}>
<input type="text" className='todo-input' placeholder='add a task' onChange={(e) => setValue(e.target.value)} value={value}/>
<button type='submit' className='todo-btn'>ADD TASK</button>
</form>
 )
}
export default Todoform