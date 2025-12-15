import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Task from "./components/Task"

import Footer from "./components/Footer"
import TaskList from "./components/TaskList"
import TaskFilter from "./components/TaskFilter"
import InputTask from "./components/InputTask"

function App() {
  const [tasks, setTask] = useState([
    {id:1, description:"Play football", status:"active",createdTime:"now"}
  ]);
  const addItem = (text) =>{
    //key value pair standard js obj
    const newTask = {
      id: Date.now(),
      description: text,
      completed: false,
      createdTime: 'just now'
    };
    //adding new task to existing array
    setTask((prevTask)=>[...prevTask, newTask]);
  };

  return (
    <>
      <section className="todoapp">
        <header class="header">
          <h1>todos</h1>
          <InputTask onItemAdded={addItem}/>
        </header>
        <section className="main">
          <TaskList>
            {tasks.map((task)=>(
              <Task
              key = {task.id}
              description={task.description}
              status={task.status}
              createdTime={task.createdTime}
            />
            ))}
            
            
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
