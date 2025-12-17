import { useState } from "react"
import "./App.css"
import Task from "./components/Task"

import Footer from "./components/Footer"
import TaskList from "./components/TaskList"
import TaskFilter from "./components/TaskFilter"
import InputTask from "./components/InputTask"

function App() {
  const [tasks, setTask] = useState([]);

  const toggleStatus = (id)=>{
    setTask(tasks.map((task)=>{
      if(task.id === id){
        return{
          ...task,
          status: task.status === "active"?"completed":"active"
          

        };
      }
      return task;
    }));
  };
  

  const deleteTask = (idToDelete)=>{
    const newTask = tasks.filter((task)=> task.id !== idToDelete);
    setTask(newTask);

  }
  const addItem = (text) =>{
    //key value pair standard js obj
    const newTask = {
      //id: Date.now(),
      id: crypto.randomUUID(),
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
              onToggle = {toggleStatus}

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
