import { Children } from "react";

export default function Footer({n,Children}) {
  return (
    <footer className="footer">
      <span className="todo-count">{n} items left</span>
      {Children}
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}
