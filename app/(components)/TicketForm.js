"use client";

import { useRouter } from "next/navigation"
import React, { useState} from "react";


const TicketForm = () => {


    const handleChange = (e) =>{
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
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
        <form>
      <h3>Create your Ticket</h3>
      <label>Title</label>
      <input id="title" name="title" type="text" onChange={handleChange} require={true} value={formData.title}/>
      </form>
    </div>
  )
}

export default TicketForm
