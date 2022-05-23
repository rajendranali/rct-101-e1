import React from 'react'
import styles from './task.module.css'
import Counter from '../Counter/Counter'
const Task = ({ todo, Ondelete }) => {
  // NOTE: do not delete `data-cy` key value pair
  return todo.map((task) => {
    return (
      <>
        {task.text !== '' ? (
          <li data-cy="task" className={styles.task} key={task.id}>
            <input type="checkbox" data-cy="task-checkbox" />
            <div data-cy="task-text">{task.text}</div>
            {/* Counter here */}
            <Counter />
            <button data-cy="task-remove-button" onClick={() => Ondelete()}>
              x
            </button>
          </li>
        ) : (
          <button data-cy="task-remove-button" style={{ disabled: true }}>
            x
          </button>
        )}
      </>
    )
  })
}

export default Task
