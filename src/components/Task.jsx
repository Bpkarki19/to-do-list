

function Task({ description, status, createdTime }) {
  const isCompleted = status === "completed"

  return (
    <li className={isCompleted ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          defaultChecked={isCompleted}
        />
        <label>
          <span className="description">{description}</span>
          <span className="created">{createdTime}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  )
}
export default Task
