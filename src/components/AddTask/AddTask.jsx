import React, { useState } from 'react'
import styles from './addTask.module.css'
import { AiOutlinePlus } from 'react-icons/ai'
import Task from '../Task/Task'
const AddTask = ({ data }) => {
  // NOTE: do not delete `data-cy` key value pair
  const [todo, SetTodo] = useState([data])
  const [text, SetInput1] = useState('')
  const handleClick = () => {
    SetTodo([
      ...todo,
      {
        id: Date.now(),
        text: text,
        complete: false,
      },
    ])
    SetInput1('')
  }

  const Ondelete = (id) => {
    let newtodo = todo.filter((item) => item.id !== id)
    SetTodo(newtodo)
  }

  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        type="text"
        onChange={(e) => SetInput1(e.target.value)}
        placeholder="Add task.."
      />
      <button data-cy="add-task-button" onClick={() => handleClick()}>
        <AiOutlinePlus />
      </button>
      <Task todo={todo} key={todo.id} Ondelete={Ondelete} />
    </div>
  )
}

export default AddTask
