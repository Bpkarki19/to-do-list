

export default function Footer({n,children, clearCompleted}) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{n }</strong>{n === 1? ' item ':' items '} left</span>
      {children}
      <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
    </footer>
  )
}
