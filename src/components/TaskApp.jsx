import React from 'react'

import styles from './taskApp.module.css'
import TaskHeader from './TaskHeader/TaskHeader'
import AddTask from './AddTask/AddTask'
import data from '../data/tasks.json'
const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader />
      {/* Add Task */}
      <AddTask data={data} />
      {/* Tasks */}
    </div>
  )
}

export default TaskApp
