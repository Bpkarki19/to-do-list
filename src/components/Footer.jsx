

export default function Footer({n,children}) {
  return (
    <footer className="footer">
      <span className="todo-count">{n} items left</span>
      {children}
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}
