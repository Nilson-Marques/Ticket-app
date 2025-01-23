"use client";

import { useRouter } from "next/navigation"
import React, { useState} from "react";


const TicketForm = () => {
  const  router = useRouter()


    const handleChange =  (e) =>{
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({formData}),
      "content-type":"aplication/jason"
      })

      if(!res.ok){
        throw new Error("failed to create Ticket.")
      }

      router.refresh()
      router.push("/")
    }


  
    const startTicketData = {
        title:"",
        description:"",
        priority: 1,
        progress: 0, 
        catagory: "not started",
        category: "Hardware problem",

    };

    const [formData, setFormData] = useState (startTicketData)

    return (
    <div className="flex justify-center">
        <form className="flex flex-col gap-3 w-1/2" method="post"  onSubmit={handleSubmit}>
      <h3>Create your Ticket</h3>
      <label>Title</label>
      <input id="title" name="title" type="text" onChange={handleChange} require={true} value={formData.title}/>

      <label>Description</label>
      <textarea id="description" name="description"  onChange={handleChange} require={true} value={formData.description}
      rows="5"/>

      <label>catagory</label>
      <select name="catagory" value={formData.catagory} onChange={handleChange}>
        <option value="hardware Problem">Hardware problem</option>
        <option value="hardware Problem">Software problem</option>
        <option value="hardware Problem">Project</option>
      </select>

      <label>priority</label>
      <div>
          <input 
          id="priority-1"
           name="priority" 
           type="radio" 
           onChange={handleChange} 
           value={1} 
           checked={formData.priority == 1}/> 
           <label>1</label>
           <input 
          id="priority-2"
           name="priority" 
           type="radio" 
           onChange={handleChange} 
           value={2} 
           checked={formData.priority == 2}/> 
           <label>2</label>
           <input 
          id="priority-3"
           name="priority" 
           type="radio" 
           onChange={handleChange} 
           value={3} 
           checked={formData.priority == 3}/> 
           <label>3</label>
           <input 
          id="priority-4"
           name="priority" 
           type="radio" 
           onChange={handleChange} 
           value={4} 
           checked={formData.priority == 4}/> 
           <label>4</label>
           <input 
          id="priority-5"
           name="priority" 
           type="radio" 
           onChange={handleChange} 
           value={5} 
           checked={formData.priority == 5}/> 
           <label>5</label>
      </div>
      <label>progress</label>
      <input type="range" id="progress" name="progress" value={formData.progress} min="0" max="100" onChange={handleChange}/> 
      <label>Status</label>
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="not started"> not Started</option>
        <option value="started"> Started</option>
        <option value="done"> Done</option>
      </select>
      <input type="submit" className="btn max-w-xs" value="Create Ticket"/>
      </form>
    </div>
  )
}

export default TicketForm
