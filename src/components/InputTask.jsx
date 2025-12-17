import { useState } from "react"
export default function InputTask({ onItemAdded }) {
  const [text, setText] = useState("")
  const onLabelChange = (e) => {
    setText(e.target.value)
  }
  const handleKetDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      if (text.trim() === "") return
      onItemAdded(text)
      setText("")
    }
  }
  return (
   
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={onLabelChange}
        onKeyDown={handleKetDown}
        value={text}
      />
   
  )
}
