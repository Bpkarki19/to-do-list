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

  const deleteTask = (idToDelete)=>{
    const newTask = tasks.filter((task)=> task.id !== idToDelete);
    setTask(newTask);

  }
  const addItem = (text) =>{
    //key value pair standard js obj
    const newTask = {
      id: Date.now(),
      description: text,
      status: "active",
      createdTime: 'just now'
    };
    //adding new task to existing array
    setTask((prevTask)=>[...prevTask, newTask]);
  };

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <InputTask onItemAdded={addItem}/>
        </header>
        <section className="main">
          <TaskList>
            {tasks.map((task)=>(
              <Task
              key = {task.id}
              id = {task.id}
              description={task.description}
              status={task.status}
              createdTime={task.createdTime}
              onDelete = {deleteTask}
            />
            ))}
          </TaskList>
          

          <Footer n={tasks.length}>
            <TaskFilter/>
          </Footer> 
        </section>
      </section>
    </>
  )
}

export default App
