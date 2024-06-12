import React, { useState } from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ModalUnstyled from '../modal/ModalUnstled';

const index = () => {
  const [open,setOpen] = useState(false)
  const [todo,setTodo] = useState([
    {id: 1 , status: "open" ,elements:[{title: "Task-1"}]},
    {id: 1 , status: "pending" ,elements:[{title: "Task-2"}]},
    {id: 1 , status: "inprog" ,elements:[{title: "Task-3"}]},
    {id: 1 , status: "complete" ,elements:[{title: "Task-4"}]}
  ])
  const [task,setTask] = useState({})
  const handleClick =()=>{
    setOpen(true)
  }
  const editItem=(status,index)=>{
   setTask({status,index})
   setOpen(true)
  }
  const delItem=(status , index)=>{
    todo.forEach(item=>{
      if(item.status === status){
        item.elements.splice(index,1)
      }})
      setTodo([...todo])
    }
  return (
    <>
   <div className="container">
    <h1 className='text-primary d-flex justify-content-center align-items-center gap-2'>Task Aplication<AssignmentIcon className='fs-2'/></h1>
   <div className="d-none">  <ModalUnstyled open={open} setOpen={setOpen} todo={todo} setTodo={setTodo} task={task} /></div>
    <div className="card_wrapper d-flex gap-3">
    {
      todo?.map((item,index)=>(
        <div className="card w-25 d-flex flex-col justify-content-center align-items-center" key={index}>
        <div className="card_header">
        <h1 className='text-center fs-1 text-info'>{item.status}</h1>
        </div>
        <div className="card_body">
        {item?.elements.map((el,ind)=>(
          <div className="d-flex  justify-content-center gap-2 align-items-center" key={ind}>
             <h1 className='fs-2'>{el.title}</h1>
             <button onClick={()=>editItem(item.status,index)} className='bg-transparent border-0'><box-icon type='solid' size="32px" name='edit' color="blue"></box-icon></button>
             <button onClick={()=>delItem(item.status,index)} className='bg-transparent border-0'><box-icon name='trash' size="32px" color="red"></box-icon></button>
             </div>   
      ))}
       </div>
        <button className='rounded bg-black text-white border-0 p-2 w-100' onClick={handleClick}>ADD TASK<AddTaskIcon/></button>
      </div>
      ))
    }
    </div>
   </div>
   </>
  );
};

export default index;
