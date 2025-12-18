export default function TaskFilter({currentFilter,setFilter}){
    return(
        <ul className="filters">
        <li>
          <button className={currentFilter==="all"?"selected":""}
          onClick={()=>setFilter("all")}
          >All</button>
        </li>
        <li>
          <button className={currentFilter==="active"?"selected":""}
          onClick={()=>setFilter("active")}
          >Active</button>
        </li>
        <li>
          <button className={currentFilter==="completed"?"selected":""}
          onClick={()=>setFilter("completed")}
          >Completed</button>
        </li>
      </ul>
    );
}