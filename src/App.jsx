import { useState } from "react"
import "./App.css"
import Task from "./components/Task"
import Footer from "./components/Footer"
import TaskList from "./components/TaskList"
import TaskFilter from "./components/TaskFilter"
import InputTask from "./components/InputTask"
import { use } from "react"

function App() {
  const [tasks, setTask] = useState([]);
  const [filter, setFilter] = useState('all');
  //console.log(tasks);
  
  const deleteCompleted =()=>{
    const activeTasks = tasks.filter((task)=>task.status==='active');
    setTask(activeTasks);
  };
  
  const uncompleteTaskCount = (tasks.filter((task)=>task.status==="active")).length;

  const filteredTask = tasks.filter((task)=>{
    if(filter === "active") return task.status ==="active";
    if(filter === "completed") return task.status === "completed"
    return true;
  });
 

  const editTask = (id, text)=>{
    setTask(tasks.map((task)=>{
      if (task.id === id){
        return {...task, description:text};
      }
      return task;// bug fixed here not returning any thing was causing undefined.
    }))
  }
 

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
      
      id: crypto.randomUUID(),
      description: text,
      status: "active",
      createdTime: new Date(Date.now()).toString().slice(0,24)//unix timeStamp

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
            {filteredTask.map((task)=>(
              <Task
              key = {task.id}
              id = {task.id}
              description={task.description}
              status={task.status}
              createdTime={task.createdTime}
              onDelete = {deleteTask}
              onToggle = {toggleStatus}
              onEdit={editTask}

            />
            ))}
          </TaskList>
          

          <Footer 
          n={uncompleteTaskCount}
          clearCompleted = {deleteCompleted}
          >
            <TaskFilter
            currentFilter = {filter}
            setFilter = {setFilter}
            />
          </Footer> 
        </section>
      </section>
    </>
  )
}

export default App
