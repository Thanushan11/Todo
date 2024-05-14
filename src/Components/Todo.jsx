import React from 'react'
import { useState } from 'react'
import "./Todo.css"

export const Todo = ({handleSubmit
}) => {
   const [Input,setInput] =useState();

   const handleChange = (e) =>{
    setInput(e.target.value);
    console.log(e);

   }

  return (
    <section> <div className='todo'>
      <input type="text" name="" id="" placeholder='Enter your to-do' value={Input} onChange={handleChange}/>
      <button onClick={()=>{
        handleSubmit(Input)
        setInput("")
      }}>Submit</button>
    </div></section>
   
  )
}

 
