import { useState } from "react"

function Task({ id,onDelete,onToggle,onEdit, description, status, createdTime }) {
  const isCompleted = status === "completed"
  const [text, setText] = useState(description);
  const [isEditing, setIsEditing] = useState(false);
  console.log('text-->',text);
  console.log(isEditing);

  
  

  const edit = () => {
    setIsEditing(true);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onEdit(id,text);
      setIsEditing(false);
      //callin backend part
      console.log('enter pressed')
    }
    
  }

  

  return (
    <li className={`${isCompleted?"completed":""} ${isEditing?"editing":""}`}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked = {isCompleted}
            onChange={()=>onToggle(id)}//call parent function click
          />
          <label>
            <span className="description">{description}</span>
            <span className="created">{createdTime}</span>
          </label>
          <button
            type="button"
            className="icon icon-edit"
            onClick={edit}
            aria-label="Edit"
          ></button>
          <button type="button" 
          className="icon icon-destroy" 
          onClick={()=>onDelete(id)}
          aria-label="Delete"></button>
        </div>
        <input
          type="text"
          className="edit"
          value={text}
          onChange={(e)=>setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
    </li>
  )
}
export default Task
