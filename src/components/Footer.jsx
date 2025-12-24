import PropTypes from "prop-types"

export default function Footer({
  n = 0,
  children = null, 
  clearCompleted = ()=>{},
}) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{n }</strong>{n === 1? ' item ':' items '} left</span>
      {children}
      <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
    </footer>
  )
}

Footer.PropTypes = {
  n:PropTypes.number,
  childern:PropTypes.node,
  clearCompleted:PropTypes.func,
}