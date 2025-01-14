import React from 'react'
import styles from './taskHeader.module.css'

const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = 0
  let unCompletedTask = 0

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <b data-cy="header-remaining-task">You have {unCompletedTask} of</b>
      <b data-cy="header-total-task">{totalTask} remaining tasks</b>
    </div>
  )
}

export default TaskHeader
