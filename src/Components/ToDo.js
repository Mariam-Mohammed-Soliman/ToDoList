import React from 'react'

const ToDo = (props) => {
  return (
    <div className='container todoTask border border-danger mt-1 me-5'>
        <div className="row input-group justify-content-center my-3">
      <div className='col-6 mx-2 todoData border border-success' onClick={props.onToggleCompleted} style={{textDecoration:props.todo.complete?"line-through underline":""}}>{props.todo.text}</div>
      <div className="delete mx-4 col-1 btn btn-danger" onClick={props.onDelete}>x</div>
        </div>
    </div>
  )
}

export default ToDo;
