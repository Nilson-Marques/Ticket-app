"use client";

import { useRouter } from "next/navigation"
import React, { useState} from "react";


const TicketForm = () => {
  
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
    <div>
      
    </div>
  )
}

export default TicketForm
