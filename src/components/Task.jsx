import { useState, useEffect } from "react"
import { formatDistanceToNow} from "date-fns"
import PropTypes from "prop-types";

function Task({ 
  //default props
  id,
  onDelete =()=>{},//Preventing "undefined is not a function" Errors
  onToggle =()=>{},
  onEdit =()=>{}, 
  description = "No description provided", 
  status = "active", 
  createdTime = new Date() 
}) {
  const isCompleted = status === "completed"
  const [text, setText] = useState(description);
  const [isEditing, setIsEditing] = useState(false);
  const [timeAgo, setTimeAgo] = useState(formatDistanceToNow(createdTime,{includeSeconds:true, addSuffix:true}))

  useEffect(()=>{
    const interval = setInterval(()=>{
      setTimeAgo(
        formatDistanceToNow(createdTime,{includeSeconds:true, addSuffix:true})
      )
    },10000)
    return ()=> clearInterval(interval)

  },[createdTime])
  

  
  

  const edit = () => {
    setIsEditing(true);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onEdit(id,text);
      setIsEditing(false);
      //callin backend part
      
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
            <span className="created">{timeAgo}</span>
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

Task.prototype = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  status: PropTypes.oneOf(['active','completed']),
  createdTime: PropTypes.instanceOf(Date),
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
  onEdit: PropTypes.func
}
export default Task
