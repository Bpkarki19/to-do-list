
import Task from './Task';

export default function TaskList({children}) {
  return (
    <ul className="todo-list">
      {children}
    </ul>
  )
}
