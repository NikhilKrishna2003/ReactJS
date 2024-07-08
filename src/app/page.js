"use client"
import { Main } from 'next/document'
import React, { useState } from 'react'
import { render } from 'react-dom'

const page = () => {
  const[title,setTitle]=useState("")
  const[description,setDescription]=useState("")
  const [Maintask, setMaintask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMaintask([...Maintask,{title,description}])
    setTitle("")
    setDescription("")
    console.log(Maintask)
  }

  const deleteHandler = (i) => {
    let copytask =[...Maintask]
    copytask.splice(i,1)
    setMaintask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>
  if(Maintask.length>0){
    renderTask = Maintask.map((t,i)=>{
      return (
      <li key={i} className='flex items-center justify-betweeen mb-8'>
        <div className='flex items-center justify-between w-full'>
         <h5 className='text-2xl font-semibold'>{t.title}</h5>
         <h6 className='text-xl font-semibold'>{t.description}</h6>
         <button 
         onClick={()=>{
          deleteHandler(i)
        }}
         className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
        </div>
      </li>
      )   
    })
  }

  return (
    <div>
      <h1 className='py-5 mr-2 hover:bg-grey-200 transition-colors hover:text-grey-600 ml-2 flex justify-center items-center text-2xl semibold bg-black text-white rounded-full mt-2'>
          Nikhil's Todo List
      </h1>
      <form onSubmit={submitHandler} className='flex justify-center items-center gap-20 mt-10'>
            <input 
              type='text'
              className='text-xl border-4 border-gray-800 px-4 py-2' 
              placeholder='title add chestha babu'
              value={title}
              onChange={(e)=>{
               setTitle(e.target.value)
              }}
            />
            <input 
              type='text'
              className='text-xl border-4 border-gray-800 px-4 py-2' 
              placeholder='Description add chestha babu'
              value={description}
              onChange={(e)=>{
                setDescription(e.target.value)
              }}
            />
            <button 
              className='bg-black hover:bg-green-700 text-white text-xl rounded px-4 py-3'>Add Task</button>
      </form>
      <div className='p-8 bg-slate-300 mt-2 '>
              <ul>
                {renderTask}
              </ul>
      </div>
    </div>
  )
}

export default page

