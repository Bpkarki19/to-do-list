import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Task from "./components/Task"
import NewTaskForm from "./components/NewTaskForm"
import Footer from "./components/Footer"
import TaskList from "./components/TaskList"
import TaskFilter from "./components/TaskFilter"

function App() {
  const [tasks, setTask] = useState();

  return (
    <>
      <section className="todoapp">
        <header class="header">
          <h1>todos</h1>
          <input
            class="new-todo"
            placeholder="What needs to be done?"
            autofocus
          />
        </header>
        <section className="main">
          <TaskList>
            <Task
              description="Completed task"
              status="completed"
              createdTime="created 17 seconds ago"
            />
            <NewTaskForm/>
            <Task
            description="coding"
            status={'not completed'}
            createdTime={'1hr ago'}/>
          </TaskList>
          

          <Footer n="1">
            <TaskFilter/>
          </Footer> 
        </section>
      </section>
    </>
  )
}

export default App
