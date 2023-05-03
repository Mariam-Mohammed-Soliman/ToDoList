import { useState } from 'react';
import './App.css';
import ToDo from './Components/ToDo';
import ToDoForm from './Components/ToDoForm';

function App() {

  //app data
  let [todos,setTodos]=useState([]);

  //filter names
  let [todoToShow,setTodoToShow]=useState([]);

  let [toggleAllCompleted,setToggleAllCompleted]=useState(true);

  let addTodo=(todo)=>{
    setTodos([todo,...todos]);
    //console.log(todo); //data from toDoForm component
  }

  console.log([todos]);

  const handleDelete=(id)=>{
      console.log(id);
      
      //todos.filter((todo)=> todo.id!==id); to filter Id that not deleted

      setTodos(todos.filter((todo)=> todo.id!==id));
  }

  const handleCompleted=(id)=>{
    setTodos(

      todos.map((todo)=>{
        if(todo.id===id){
  
          return {
            ...todo,
            complete: !todo.complete,
          };
        }
        else{
          return todo;
        }
      })
    )
// 

  }

  //to show the filter name
  const updateToDoToShow=(show)=>{
    setTodoToShow(show);
  }
  
  //to filter depend on the filter name
  if(todoToShow==="active"){
    todos=todos.filter((todo)=>!todo.complete)
  }
  else if(todoToShow==="complete"){
    todos=todos.filter((todo)=>todo.complete)

  }

  console.log(todoToShow);


  const handleRemoveAllCompleted=()=>{
    setTodos(todos.filter((todo)=>!todo.complete));

  }

  const HandleAllCompletedState=()=>{
    setTodos(todos.map((todo)=>({
      ...todo,
      complete:toggleAllCompleted,
    })));
    setToggleAllCompleted(!toggleAllCompleted);
  }

  return (
    <div className="App py-5">

      <div className="header">
        <div className="h1 text-capitalize">your to do list</div>
      </div>



      <ToDoForm onAddToDo={addTodo}/>

      {
        todos.map((todo)=>{
            return <ToDo key={todo.id} todo={todo} onDelete={()=>{handleDelete(todo.id)}} onToggleCompleted={()=>{handleCompleted(todo.id)}} />
        })
      }

      <div className="btnFilters container mt-5">
        <div className="btn allBtn mx-2" onClick={()=>updateToDoToShow("all")}>All</div>
        <div className="btn btn-success mx-2" onClick={()=>updateToDoToShow("active")}>Active</div>
        <div className="btn completeBtn mx-2" onClick={()=>updateToDoToShow("complete")}>Completed</div>
      </div>

      <div className="allProccess mt-5">

        {
          todos.some((todo)=>todo.complete)? (<div className="btn removeAllComp mx-1" onClick={handleRemoveAllCompleted}>remove all completed</div>):null
        }

        <div className="btn allCompBtn mx-1" onClick={HandleAllCompletedState}>all completed:{`${toggleAllCompleted}`} </div>
      </div>
      
    </div>
  );
}

export default App;
