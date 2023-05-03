import React, { useState } from 'react';



const ToDoForm = (props) => {

    const [text,setText]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();

        //to make sure that text input is not empty
        if(text!==""){
            props.onAddToDo({
                id:Math.random(),
                text:text,
                complete:false
            })
    
            setText("");
        }
        else{
            setText("");
        }
    }

    const handleChange=(e)=>{
        setText(e.target.value);
    }
  return (
    <form className='todoForm mt-5' onSubmit={handleSubmit}>
        <div className=' input-group px-5'>
            <input type="text" placeholder='enter your task' className='input-field form-control mx-5' onChange={handleChange} value={text}/>
            <div className="btn addBtn mt-1" onClick={handleSubmit}>Add To Do</div>
        </div>

    </form>
  )
}

export default ToDoForm
