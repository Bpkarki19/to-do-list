
import Task from './Task';
import NewTaskForm from './NewTaskForm';
export default function TaskList({children}) {
  return (
    <ul className="todo-list">
      {children}
    </ul>
  )
}
