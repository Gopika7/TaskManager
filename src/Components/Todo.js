import { faPenToSquare ,faTrashCan} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
 return (
<div className='Todo'>
<p onClick={()=>toggleComplete(task.id)}
       className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
<div>
<FontAwesomeIcon icon={faPenToSquare} onClick={()=>
         {
           editTodo(task.id)
         }
       }/>
<FontAwesomeIcon icon={faTrashCan} onClick={()=>
           deleteTodo(task.id)
       }/>
</div>
</div>
 )
}
export default Todo